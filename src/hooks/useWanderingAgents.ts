/**
 * useWanderingAgents — Phase 3
 * Keeps 3-4 agents always visibly moving between zones.
 * Randomizes agent statuses to make the office look alive.
 */
import { useEffect, useRef } from "react";
import { useOfficeStore } from "@/store/office-store";
import type { AgentVisualStatus, AgentZone } from "@/gateway/types";

const WANDER_ZONES: AgentZone[] = ["desk", "meeting", "hotDesk", "lounge"];
const LIVE_STATUSES: AgentVisualStatus[] = ["thinking", "tool_calling", "speaking"];
const TARGET_WALKING_COUNT = 4;

function randInt(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min));
}

function pickZoneExcluding(current: AgentZone): AgentZone {
  const others = WANDER_ZONES.filter((z) => z !== current);
  return others[Math.floor(Math.random() * others.length)];
}

export function useWanderingAgents() {
  const wanderTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // ── Status pulse: give random agents "active" status briefly ──
    const scheduleStatusPulse = () => {
      const delay = randInt(3000, 7000);
      statusTimerRef.current = setTimeout(() => {
        const store = useOfficeStore.getState();
        const agents = Array.from(store.agents.values()).filter(
          (a) => a.confirmed && !a.isPlaceholder && !a.movement,
        );
        if (agents.length > 0) {
          const count = randInt(2, 5);
          for (let i = 0; i < count; i++) {
            const agent = agents[Math.floor(Math.random() * agents.length)];
            const newStatus = LIVE_STATUSES[Math.floor(Math.random() * LIVE_STATUSES.length)];
            store.updateAgent(agent.id, { status: newStatus });
            // Reset to idle after 4-10s
            const resetDelay = randInt(4000, 10000);
            setTimeout(() => {
              const a = useOfficeStore.getState().agents.get(agent.id);
              if (a && !a.movement) {
                useOfficeStore.getState().updateAgent(agent.id, { status: "idle" });
              }
            }, resetDelay);
          }
        }
        scheduleStatusPulse();
      }, delay);
    };

    // ── Wandering: keep TARGET_WALKING_COUNT agents always in motion ──
    const scheduleWander = () => {
      const delay = randInt(1200, 3500);
      wanderTimerRef.current = setTimeout(() => {
        const store = useOfficeStore.getState();
        const allAgents = Array.from(store.agents.values()).filter(
          (a) => a.confirmed && !a.isPlaceholder,
        );
        const walkingCount = allAgents.filter((a) => a.movement !== null).length;

        if (walkingCount < TARGET_WALKING_COUNT && allAgents.length > 0) {
          const idleAgents = allAgents.filter((a) => a.movement === null);
          if (idleAgents.length > 0) {
            const agent = idleAgents[Math.floor(Math.random() * idleAgents.length)];
            const targetZone = pickZoneExcluding(agent.zone ?? "desk");
            store.startMovement(agent.id, targetZone);
          }
        }

        scheduleWander();
      }, delay);
    };

    // Delay start to let agents initialize
    const initTimer = setTimeout(() => {
      scheduleStatusPulse();
      scheduleWander();
    }, 3500);

    return () => {
      clearTimeout(initTimer);
      if (wanderTimerRef.current) clearTimeout(wanderTimerRef.current);
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    };
  }, []);
}

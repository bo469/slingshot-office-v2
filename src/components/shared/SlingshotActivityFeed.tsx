/**
 * Slingshot Live Activity Feed
 * Scrolling ticker showing real-time squad activity
 */
import { useEffect, useRef, useState } from "react";
import { SLINGSHOT_AGENTS, getRandomSpeechBubble } from "@/lib/slingshot-agents";

interface ActivityItem {
  id: string;
  agentId: string;
  agentName: string;
  agentEmoji: string;
  message: string;
  timestamp: number;
  type: "working" | "completed" | "collaboration" | "tool";
}

const ACTIVITY_TEMPLATES = {
  working: (name: string, msg: string) => `${name} → ${msg}`,
  completed: (name: string) => `${name} ✓ Task complete`,
  collaboration: (a: string, b: string) => `${a} ↔ ${b} collaborating`,
  tool: (name: string, tool: string) => `${name} called ${tool}`,
};

const TOOLS = ["web_search", "exec", "read", "write", "browser", "message", "memory_recall"];

function generateActivity(): ActivityItem {
  const agent = SLINGSHOT_AGENTS[Math.floor(Math.random() * SLINGSHOT_AGENTS.length)];
  const typeRoll = Math.random();
  let type: ActivityItem["type"];
  let message: string;

  if (typeRoll < 0.5) {
    type = "working";
    message = ACTIVITY_TEMPLATES.working(agent.name, getRandomSpeechBubble(agent.id));
  } else if (typeRoll < 0.65) {
    type = "completed";
    message = ACTIVITY_TEMPLATES.completed(agent.name);
  } else if (typeRoll < 0.80) {
    type = "tool";
    const tool = TOOLS[Math.floor(Math.random() * TOOLS.length)];
    message = ACTIVITY_TEMPLATES.tool(agent.name, tool);
  } else {
    const otherAgent = SLINGSHOT_AGENTS[Math.floor(Math.random() * SLINGSHOT_AGENTS.length)];
    type = "collaboration";
    message = ACTIVITY_TEMPLATES.collaboration(agent.name, otherAgent.name);
  }

  return {
    id: `activity-${Date.now()}-${Math.random()}`,
    agentId: agent.id,
    agentName: agent.name,
    agentEmoji: agent.emoji,
    message,
    timestamp: Date.now(),
    type,
  };
}

const TYPE_COLORS: Record<ActivityItem["type"], string> = {
  working: "#0066FF",
  completed: "#10b981",
  collaboration: "#8b5cf6",
  tool: "#f59e0b",
};

export function SlingshotActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>(() =>
    Array.from({ length: 20 }, generateActivity),
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActivities((prev) => {
        const newItem = generateActivity();
        return [newItem, ...prev.slice(0, 49)]; // keep last 50
      });
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="flex items-center overflow-hidden"
      style={{
        height: "32px",
        background: "#0a0a0a",
        borderTop: "1px solid #1e1e1e",
        borderBottom: "1px solid #1e1e1e",
      }}
    >
      {/* Label */}
      <div
        className="flex shrink-0 items-center gap-1.5 px-3"
        style={{
          background: "#0066FF",
          height: "100%",
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          color: "#FFFFFF",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#FFFFFF",
            display: "inline-block",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
        LIVE
      </div>

      {/* Scrolling content */}
      <div className="activity-ticker flex-1">
        <div className="activity-ticker-inner">
          {/* Duplicate for seamless loop */}
          {[...activities, ...activities].map((item, idx) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${item.id}-${idx}`}
              className="flex items-center"
              style={{ padding: "0 24px", fontSize: "12px", color: "#8A94A6", whiteSpace: "nowrap" }}
            >
              <span style={{ marginRight: "6px" }}>{item.agentEmoji}</span>
              <span style={{ color: TYPE_COLORS[item.type], fontWeight: 500 }}>
                {item.message}
              </span>
              <span style={{ margin: "0 16px", color: "#2a2a2a" }}>•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Slingshot Live Activity Feed — Phase 2
 * Scrolling ticker showing real-time squad activity with Taptico-specific context
 */
import { useEffect, useRef, useState } from "react";

interface ActivityItem {
  id: string;
  message: string;
  timestamp: number;
  type: "working" | "completed" | "collaboration" | "tool" | "intel";
}

// 30+ Taptico-specific activity messages
const TAPTICO_ACTIVITY_MESSAGES: Array<{ message: string; type: ActivityItem["type"] }> = [
  { message: "Bo is reviewing the ZIPS outreach package", type: "working" },
  { message: "Iris is researching Mountain High Outfitters", type: "working" },
  { message: "Ada is building the Slingshot Office visualization", type: "working" },
  { message: "Scribe is drafting Nick's LinkedIn post", type: "working" },
  { message: "Vince is preparing cold outreach sequences", type: "working" },
  { message: "Oracle is synthesizing competitive intelligence brief", type: "working" },
  { message: "Lucy is running 5-attack protocol on new proposal", type: "working" },
  { message: "Scout found 23 qualified DSO leads in Phoenix", type: "intel" },
  { message: "Maverick launched 150-contact cold email campaign", type: "working" },
  { message: "Ledger updated CAC/LTV model — $2.1M ARR projected", type: "intel" },
  { message: "Cipher rotated all API secrets on schedule", type: "completed" },
  { message: "Sentinel: all 47 endpoints green, no anomalies", type: "intel" },
  { message: "Winston secured $84K renewal with Dental Harmony", type: "completed" },
  { message: "Serpico: organic traffic up 28% MoM on Taptico site", type: "intel" },
  { message: "Scribe → Lucy: proposal QA gate passed ✓", type: "collaboration" },
  { message: "Iris → Scribe: Mountain High research brief delivered", type: "collaboration" },
  { message: "Radar detected new entrant in dental AI space", type: "intel" },
  { message: "Ralph completed build loop iteration 7/12", type: "working" },
  { message: "Nancy: test suite 847 tests, 0 failures", type: "completed" },
  { message: "Protocol updated client onboarding SOP", type: "completed" },
  { message: "Bridge: GHL ↔ Apollo integration live", type: "completed" },
  { message: "Knox: SLA compliance 100%, token costs within budget", type: "intel" },
  { message: "Astor preparing competitive dossier on Cerby Health", type: "working" },
  { message: "Hector resolved Dental Harmony support ticket in 12 min", type: "completed" },
  { message: "Garrison identified upsell opportunity for Mountain High", type: "intel" },
  { message: "Pixel generating visual assets for ZIPS campaign", type: "working" },
  { message: "Herbert published SEO article on AI for dental practices", type: "completed" },
  { message: "Connie: LinkedIn engagement up 34% this month", type: "intel" },
  { message: "Forge built new Power Automate flow for Dental Harmony", type: "completed" },
  { message: "Quill submitted A/B email copy variants to Maverick", type: "collaboration" },
  { message: "Advocate reviewed NDA template for Mountain High", type: "completed" },
  { message: "Underwriter signed off HIPAA compliance checklist", type: "completed" },
  { message: "Phillip deployed SharePoint workspace for new client", type: "completed" },
  { message: "Coach installed new agent skill module", type: "completed" },
  { message: "Vanguard: go-to-market plan reviewed with Oracle", type: "collaboration" },
  { message: "Maya: process health score 94/100 — 3 gaps resolved", type: "intel" },
  { message: "Repo tagged release v2.1.0 — 0 critical CVEs", type: "completed" },
  { message: "Goose completed codebase refactor: 1,247 lines touched", type: "completed" },
  { message: "Doc updated Slingshot runbook with new procedures", type: "completed" },
  { message: "Sage recommending build-vs-buy approach for new tool", type: "working" },
  { message: "Pierce flagged contract clause — escalating to Nick", type: "intel" },
  { message: "Atlas: capacity planning for Q3 expansion complete", type: "completed" },
  { message: "Bo → Oracle: Q2 strategy alignment session starting", type: "collaboration" },
  { message: "Ada: infrastructure scaled for 50-agent workload", type: "completed" },
  { message: "Ops coordinating 7 active client deliverables", type: "working" },
  { message: "Don closed Mountain High Outfitters — moving to onboarding", type: "completed" },
  { message: "Producer Paul: Slingshot demo video in post-production", type: "working" },
  { message: "Palette: pitch deck for ZIPS finalized in Taptico style", type: "completed" },
  { message: "Exterminator eliminated edge case in lead scoring logic", type: "completed" },
  { message: "Nigel: API endpoint 40% faster after optimization", type: "completed" },
];

let messageIndex = Math.floor(Math.random() * TAPTICO_ACTIVITY_MESSAGES.length);

function generateActivity(): ActivityItem {
  const template = TAPTICO_ACTIVITY_MESSAGES[messageIndex % TAPTICO_ACTIVITY_MESSAGES.length];
  messageIndex++;
  return {
    id: `activity-${Date.now()}-${Math.random()}`,
    message: template.message,
    timestamp: Date.now(),
    type: template.type,
  };
}

const TYPE_COLORS: Record<ActivityItem["type"], string> = {
  working: "#0066FF",
  completed: "#10b981",
  collaboration: "#8b5cf6",
  tool: "#f59e0b",
  intel: "#14b8a6",
};

const TYPE_ICONS: Record<ActivityItem["type"], string> = {
  working: "⚡",
  completed: "✓",
  collaboration: "↔",
  tool: "🔧",
  intel: "📡",
};

export function SlingshotActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>(() =>
    Array.from({ length: 25 }, generateActivity),
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // New message every 3-5 seconds (randomized)
    const scheduleNext = () => {
      const delay = 3000 + Math.random() * 2000;
      intervalRef.current = setTimeout(() => {
        setActivities((prev) => {
          const newItem = generateActivity();
          return [newItem, ...prev.slice(0, 49)];
        });
        scheduleNext();
      }, delay);
    };
    scheduleNext();

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="flex items-center overflow-hidden"
      style={{
        height: "32px",
        background: "#0a0a0a",
        borderTop: "1px solid #1e1e1e",
        flexShrink: 0,
      }}
    >
      {/* LIVE label */}
      <div
        className="flex shrink-0 items-center gap-1.5 px-3"
        style={{
          background: "#0066FF",
          height: "100%",
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
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

      {/* Scrolling ticker */}
      <div
        className="activity-ticker flex-1"
        style={{ overflow: "hidden", position: "relative", height: "100%" }}
      >
        <div
          className="activity-ticker-inner"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          {[...activities, ...activities].map((item, idx) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${item.id}-${idx}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 20px",
                fontSize: "12px",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span
                style={{
                  marginRight: "6px",
                  fontSize: "10px",
                  color: TYPE_COLORS[item.type],
                  fontWeight: 700,
                }}
              >
                {TYPE_ICONS[item.type]}
              </span>
              <span style={{ color: "#C8D0DC", fontWeight: 400 }}>
                {item.message}
              </span>
              <span style={{ margin: "0 20px", color: "#2a2a2a", fontSize: "14px" }}>•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

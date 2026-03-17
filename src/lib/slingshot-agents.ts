/**
 * Slingshot Squad — 52 AI Agents at Taptico Solutions
 * Organized by department with emoji identifiers and speech bubble content
 */

export type Department =
  | "leadership"
  | "sales"
  | "research"
  | "content"
  | "operations"
  | "engineering"
  | "security"
  | "client-success"
  | "seo"
  | "specialized";

export interface SlingshotAgent {
  id: string;
  name: string;
  emoji: string;
  department: Department;
  role: string;
  model: string;
  speechBubbles: string[];
  color: string; // accent color for avatar
}

export const DEPARTMENT_COLORS: Record<Department, string> = {
  leadership: "#8b5cf6",
  sales: "#10b981",
  research: "#3b82f6",
  content: "#f59e0b",
  operations: "#ef4444",
  engineering: "#0066FF",
  security: "#dc2626",
  "client-success": "#14b8a6",
  seo: "#a855f7",
  specialized: "#ec4899",
};

export const DEPARTMENT_LABELS: Record<Department, string> = {
  leadership: "Leadership",
  sales: "Sales",
  research: "Research",
  content: "Content",
  operations: "Operations",
  engineering: "Engineering",
  security: "Security",
  "client-success": "Client Success",
  seo: "SEO",
  specialized: "Specialized",
};

export const SLINGSHOT_AGENTS: SlingshotAgent[] = [
  // ── LEADERSHIP ──────────────────────────────────────────────
  {
    id: "bo",
    name: "Bo",
    emoji: "🎯",
    department: "leadership",
    role: "Chief AI Officer",
    model: "anthropic/claude-opus-4",
    color: "#8b5cf6",
    speechBubbles: [
      "Reviewing weekly KPIs...",
      "Aligning the squad on Q2 goals",
      "The Slingshot is working. Numbers don't lie.",
      "Coordinating with Nick on new client intake",
      "Running the Monday briefing",
    ],
  },
  {
    id: "oracle",
    name: "Oracle",
    emoji: "🔮",
    department: "leadership",
    role: "Strategic Intelligence",
    model: "anthropic/claude-opus-4",
    color: "#8b5cf6",
    speechBubbles: [
      "Pattern detected in competitor messaging...",
      "Market signal: healthcare vertical heating up",
      "Strategic brief ready for Bo's review",
      "Synthesizing 47 data points into one recommendation",
      "The answer was in the data all along.",
    ],
  },
  {
    id: "lucy",
    name: "Lucy",
    emoji: "⚔️",
    department: "leadership",
    role: "Adversarial QA Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#8b5cf6",
    speechBubbles: [
      "Running the 5-attack protocol on this proposal...",
      "Found a Competitor Kill Shot vulnerability. Fixing.",
      "Customer Rejection test: FAIL. Revising.",
      "Execution Failure: dependencies not validated",
      "Sending back to Scribe for revision.",
    ],
  },
  {
    id: "astor",
    name: "Astor",
    emoji: "📊",
    department: "leadership",
    role: "Executive Intelligence",
    model: "anthropic/claude-sonnet-4-6",
    color: "#8b5cf6",
    speechBubbles: [
      "Executive brief drafted for Nick",
      "Condensing 200 pages into 3 bullet points",
      "Board-ready summary complete",
      "Weekly metrics compiled and formatted",
    ],
  },
  {
    id: "atlas",
    name: "Atlas",
    emoji: "🗺️",
    department: "leadership",
    role: "Operations Planner",
    model: "anthropic/claude-sonnet-4-6",
    color: "#8b5cf6",
    speechBubbles: [
      "Mapping the full client journey",
      "Project dependencies charted",
      "Capacity planning for next quarter",
      "Roadmap updated with new priorities",
    ],
  },

  // ── SALES ────────────────────────────────────────────────────
  {
    id: "vince",
    name: "Vince",
    emoji: "💰",
    department: "sales",
    role: "Sales Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#10b981",
    speechBubbles: [
      "Pipeline review: 12 hot leads this week",
      "Closing that dental group today",
      "Follow-up sequence armed and ready",
      "Demo booked with a 50-location MSO",
      "That's 3 closes before lunch. Nice.",
    ],
  },
  {
    id: "don",
    name: "Don",
    emoji: "🤝",
    department: "sales",
    role: "Account Executive",
    model: "anthropic/claude-sonnet-4-6",
    color: "#10b981",
    speechBubbles: [
      "Personalized outreach drafted for Dr. Martinez",
      "Account review with Vince in 10",
      "Building relationship dossier",
      "They signed. Moving to onboarding.",
    ],
  },
  {
    id: "scout",
    name: "Scout",
    emoji: "🔍",
    department: "sales",
    role: "Lead Prospector",
    model: "openai/gpt-4o",
    color: "#10b981",
    speechBubbles: [
      "Found 23 qualified dental practices in Phoenix",
      "Apollo enrichment complete: 89% match rate",
      "ICP scoring 47 new leads now",
      "LinkedIn Sales Nav sweep done",
    ],
  },
  {
    id: "maverick",
    name: "Maverick",
    emoji: "✈️",
    department: "sales",
    role: "Outbound Specialist",
    model: "anthropic/claude-sonnet-4-6",
    color: "#10b981",
    speechBubbles: [
      "Cold email sequence launched: 150 contacts",
      "A/B test running on subject lines",
      "Reply rate at 8.3% — above benchmark",
      "Instantly campaign optimized",
    ],
  },

  // ── RESEARCH ─────────────────────────────────────────────────
  {
    id: "iris",
    name: "Iris",
    emoji: "🔬",
    department: "research",
    role: "Research Lead",
    model: "anthropic/claude-opus-4",
    color: "#3b82f6",
    speechBubbles: [
      "Deep research complete: 12 verified sources",
      "Synthesizing competitive landscape report",
      "Citation accuracy: 100%",
      "Pulling SEC filings for market analysis",
      "Research brief ready for Scribe",
    ],
  },
  {
    id: "pierce",
    name: "Pierce",
    emoji: "📰",
    department: "research",
    role: "News & Trend Analyst",
    model: "openai/gpt-4o",
    color: "#3b82f6",
    speechBubbles: [
      "Monitoring 847 sources for relevant signals",
      "Breaking: AI regulation update affecting healthcare",
      "Trend brief sent to Oracle",
      "Weekly news digest compiled",
    ],
  },
  {
    id: "ledger",
    name: "Ledger",
    emoji: "📈",
    department: "research",
    role: "Financial Analyst",
    model: "anthropic/claude-sonnet-4-6",
    color: "#3b82f6",
    speechBubbles: [
      "Unit economics model updated",
      "CAC/LTV analysis complete",
      "Revenue projection: $2.1M ARR by Q4",
      "Financial due diligence on target account",
    ],
  },
  {
    id: "knox",
    name: "Knox",
    emoji: "📋",
    department: "research",
    role: "KPI Tracker",
    model: "openai/gpt-4o-mini",
    color: "#3b82f6",
    speechBubbles: [
      "Weekly KPI report compiled",
      "Uptime: 99.97% — green across the board",
      "Token costs within budget this week",
      "SLA compliance: 100%",
    ],
  },
  {
    id: "radar",
    name: "Radar",
    emoji: "📡",
    department: "research",
    role: "Market Intelligence",
    model: "openai/gpt-4o",
    color: "#3b82f6",
    speechBubbles: [
      "Competitor pricing change detected",
      "New entrant in dental AI space",
      "Market signal: private equity rolling up DSOs",
      "Industry report published by ADA — summarizing",
    ],
  },
  {
    id: "sage",
    name: "Sage",
    emoji: "🧠",
    department: "research",
    role: "Strategic Advisor",
    model: "anthropic/claude-opus-4",
    color: "#3b82f6",
    speechBubbles: [
      "Strategic framework applied to problem",
      "First principles analysis complete",
      "Recommend the build-vs-buy approach here",
      "Long-term implications documented",
    ],
  },

  // ── CONTENT ──────────────────────────────────────────────────
  {
    id: "scribe",
    name: "Scribe",
    emoji: "✍️",
    department: "content",
    role: "Lead Copywriter",
    model: "anthropic/claude-sonnet-4-6",
    color: "#f59e0b",
    speechBubbles: [
      "Proposal draft complete — sending to Lucy",
      "Blog post optimized for conversion",
      "Email sequence: 5 touches, 7-day cadence",
      "Nick's newsletter ready for review",
      "Case study written: 300% ROI headline",
    ],
  },
  {
    id: "connie",
    name: "Connie",
    emoji: "📱",
    department: "content",
    role: "Social Media Manager",
    model: "anthropic/claude-sonnet-4-6",
    color: "#f59e0b",
    speechBubbles: [
      "LinkedIn content calendar filled for Q2",
      "Post scheduled: 8 AM tomorrow",
      "Engagement up 34% this month",
      "Repurposing blog content to 6 formats",
    ],
  },
  {
    id: "herbert",
    name: "Herbert",
    emoji: "🎙️",
    department: "content",
    role: "Podcast Producer",
    model: "openai/gpt-4o",
    color: "#f59e0b",
    speechBubbles: [
      "Episode outline drafted",
      "Guest brief prepared for interview",
      "Show notes complete",
      "Distribution to 8 platforms queued",
    ],
  },
  {
    id: "producer-paul",
    name: "Producer Paul",
    emoji: "🎬",
    department: "content",
    role: "Video Producer",
    model: "openai/gpt-4o",
    color: "#f59e0b",
    speechBubbles: [
      "Video script ready for recording",
      "B-roll recommendations compiled",
      "YouTube description + tags optimized",
      "Short-form clips cut from long video",
    ],
  },
  {
    id: "palette",
    name: "Palette",
    emoji: "🎨",
    department: "content",
    role: "Brand Designer",
    model: "anthropic/claude-sonnet-4-6",
    color: "#f59e0b",
    speechBubbles: [
      "Brand guidelines updated",
      "Slide deck designed in Taptico style",
      "Generating image prompts for campaign",
      "Visual identity audit complete",
    ],
  },
  {
    id: "pixel",
    name: "Pixel",
    emoji: "🖼️",
    department: "content",
    role: "Image Generation",
    model: "openai/gpt-4o",
    color: "#f59e0b",
    speechBubbles: [
      "Generating hero images for landing page",
      "Brand-consistent visuals ready",
      "12 social media graphics complete",
      "Image batch processing done",
    ],
  },

  // ── OPERATIONS ────────────────────────────────────────────────
  {
    id: "protocol",
    name: "Protocol",
    emoji: "📋",
    department: "operations",
    role: "Process Manager",
    model: "openai/gpt-4o-mini",
    color: "#ef4444",
    speechBubbles: [
      "SOP documented and versioned",
      "Process bottleneck identified: handoff step",
      "Workflow optimized — 23% time savings",
      "Onboarding checklist updated",
    ],
  },
  {
    id: "ops",
    name: "Ops",
    emoji: "⚙️",
    department: "operations",
    role: "Operations Coordinator",
    model: "openai/gpt-4o-mini",
    color: "#ef4444",
    speechBubbles: [
      "Coordinating 7 active deliverables",
      "Deadline risk flagged: project X",
      "Resource allocation optimized",
      "Weekly ops report sent to Bo",
    ],
  },
  {
    id: "doc",
    name: "Doc",
    emoji: "📚",
    department: "operations",
    role: "Documentation Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ef4444",
    speechBubbles: [
      "Internal wiki updated with new process",
      "Client-facing documentation complete",
      "Knowledge base article published",
      "Archiving deprecated procedures",
    ],
  },
  {
    id: "bridge",
    name: "Bridge",
    emoji: "🌉",
    department: "operations",
    role: "Integration Specialist",
    model: "openai/gpt-4o",
    color: "#ef4444",
    speechBubbles: [
      "Zapier workflow deployed",
      "CRM ↔ email sync configured",
      "n8n automation tested and running",
      "API integration complete",
    ],
  },
  {
    id: "exterminator",
    name: "Exterminator",
    emoji: "🐛",
    department: "operations",
    role: "Bug Hunter",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ef4444",
    speechBubbles: [
      "Bug found in lead scoring logic — fixed",
      "Edge case eliminated",
      "Error logs cleared",
      "QA pass complete: 0 issues",
    ],
  },

  // ── ENGINEERING ───────────────────────────────────────────────
  {
    id: "ada",
    name: "Ada",
    emoji: "💻",
    department: "engineering",
    role: "CTO",
    model: "anthropic/claude-sonnet-4-6",
    color: "#0066FF",
    speechBubbles: [
      "Infrastructure audit complete",
      "Let me check the logs.",
      "That's a SEV-3, not a SEV-1. Breathe.",
      "The backup worked. That's why we have backups.",
      "Uptime: 99.97% — as expected.",
      "Deploying Slingshot Office v2 now...",
    ],
  },
  {
    id: "nigel",
    name: "Nigel",
    emoji: "🔧",
    department: "engineering",
    role: "Backend Engineer",
    model: "openai/gpt-4o",
    color: "#0066FF",
    speechBubbles: [
      "API endpoint optimized: 40% faster",
      "Database query tuned",
      "Rate limiting implemented",
      "Webhook handler deployed",
    ],
  },
  {
    id: "gerald",
    name: "Gerald",
    emoji: "🌐",
    department: "engineering",
    role: "Frontend Engineer",
    model: "openai/gpt-4o",
    color: "#0066FF",
    speechBubbles: [
      "UI component built and tested",
      "Mobile responsive: check",
      "Loading time: 1.2s — green",
      "Accessibility audit passed",
    ],
  },
  {
    id: "helen",
    name: "Helen",
    emoji: "🗄️",
    department: "engineering",
    role: "Data Engineer",
    model: "openai/gpt-4o",
    color: "#0066FF",
    speechBubbles: [
      "ETL pipeline running clean",
      "Data warehouse updated",
      "Schema migration complete",
      "Analytics query optimized",
    ],
  },
  {
    id: "norman",
    name: "Norman",
    emoji: "🤖",
    department: "engineering",
    role: "ML Engineer",
    model: "anthropic/claude-sonnet-4-6",
    color: "#0066FF",
    speechBubbles: [
      "Model fine-tuning complete",
      "Evaluation metrics improving",
      "Inference latency optimized",
      "Training run finished — testing",
    ],
  },
  {
    id: "nancy",
    name: "Nancy",
    emoji: "🧪",
    department: "engineering",
    role: "QA Engineer",
    model: "openai/gpt-4o-mini",
    color: "#0066FF",
    speechBubbles: [
      "Test suite: 847 tests, 0 failures",
      "Regression testing complete",
      "Integration tests passing",
      "Edge cases covered",
    ],
  },

  // ── SECURITY ─────────────────────────────────────────────────
  {
    id: "cipher",
    name: "Cipher",
    emoji: "🔐",
    department: "security",
    role: "Security Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#dc2626",
    speechBubbles: [
      "Secrets rotated on schedule",
      "Zero exposed credentials in scan",
      "Encryption audit: all green",
      "Vulnerability patched before disclosure",
    ],
  },
  {
    id: "sentinel",
    name: "Sentinel",
    emoji: "🛡️",
    department: "security",
    role: "Threat Monitor",
    model: "openai/gpt-4o-mini",
    color: "#dc2626",
    speechBubbles: [
      "No anomalies in last 24 hours",
      "Token spend within budget",
      "Intrusion detection: clear",
      "Cost alert threshold not exceeded",
    ],
  },
  {
    id: "sam",
    name: "SAM",
    emoji: "🔒",
    department: "security",
    role: "Access Manager",
    model: "openai/gpt-4o-mini",
    color: "#dc2626",
    speechBubbles: [
      "Access permissions audited",
      "Least-privilege policy enforced",
      "API key rotation complete",
      "Zero unauthorized access attempts",
    ],
  },

  // ── CLIENT SUCCESS ────────────────────────────────────────────
  {
    id: "winston",
    name: "Winston",
    emoji: "🏆",
    department: "client-success",
    role: "Client Success Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#14b8a6",
    speechBubbles: [
      "Client NPS: 9.2 — outstanding",
      "QBR prep complete for tomorrow",
      "Renewal secured: $84K ARR",
      "Client health score improved to A",
    ],
  },
  {
    id: "hector",
    name: "Hector",
    emoji: "🎧",
    department: "client-success",
    role: "Support Specialist",
    model: "openai/gpt-4o-mini",
    color: "#14b8a6",
    speechBubbles: [
      "Support ticket resolved in 12 minutes",
      "Escalation avoided — handled in-channel",
      "Client onboarding session complete",
      "FAQ database updated",
    ],
  },

  // ── SEO ───────────────────────────────────────────────────────
  {
    id: "serpico",
    name: "Serpico",
    emoji: "🔎",
    department: "seo",
    role: "SEO Specialist",
    model: "openai/gpt-4o",
    color: "#a855f7",
    speechBubbles: [
      "Keyword research: 47 high-intent terms found",
      "On-page SEO optimized across 12 pages",
      "Backlink opportunity identified",
      "Organic traffic up 28% MoM",
      "Technical SEO audit: 3 critical fixes",
    ],
  },

  // ── SPECIALIZED ───────────────────────────────────────────────
  {
    id: "goose",
    name: "Goose",
    emoji: "🪿",
    department: "specialized",
    role: "AI Coding Agent",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Running autonomous coding session",
      "Codebase refactored: 1,247 lines touched",
      "Tests written and passing",
      "PR ready for review",
    ],
  },
  {
    id: "repo",
    name: "Repo",
    emoji: "📦",
    department: "specialized",
    role: "Repository Manager",
    model: "openai/gpt-4o-mini",
    color: "#ec4899",
    speechBubbles: [
      "Git history clean",
      "Branch protection rules enforced",
      "Release tagged: v2.1.0",
      "Dependency audit: 0 critical CVEs",
    ],
  },
  {
    id: "ralph",
    name: "Ralph",
    emoji: "🌀",
    department: "specialized",
    role: "Build Loop Agent",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Planning phase: IMPLEMENTATION_PLAN.md written",
      "Build loop iteration 7 of 12",
      "Backpressure applied — waiting for tests",
      "Build complete. Handing off to Nancy.",
    ],
  },
];

/** Get all agents for a given department */
export function getAgentsByDepartment(dept: Department): SlingshotAgent[] {
  return SLINGSHOT_AGENTS.filter((a) => a.department === dept);
}

/** Get a random speech bubble for an agent */
export function getRandomSpeechBubble(agentId: string): string {
  const agent = SLINGSHOT_AGENTS.find((a) => a.id === agentId);
  if (!agent || agent.speechBubbles.length === 0) return "Working...";
  return agent.speechBubbles[Math.floor(Math.random() * agent.speechBubbles.length)];
}

/** Build agent list for mock adapter */
export function buildMockAgentsList() {
  return {
    defaultId: "bo",
    mainKey: "agent:bo:main",
    scope: "global",
    agents: SLINGSHOT_AGENTS.map((a) => ({
      id: a.id,
      name: a.name,
      default: a.id === "bo",
      identity: { name: a.name, emoji: a.emoji },
    })),
  };
}

/** Build config agents list for mock config */
export function buildConfigAgentsList() {
  return SLINGSHOT_AGENTS.map((a) => ({
    id: a.id,
    model: a.model,
  }));
}

/** Agent-to-agent communication pairs (realistic Slingshot workflows) */
export const A2A_WORKFLOWS = [
  // Research → Content
  ["iris", "scribe"],
  ["pierce", "scribe"],
  ["radar", "oracle"],
  // Sales → Research
  ["scout", "iris"],
  ["vince", "maverick"],
  ["don", "scout"],
  // Leadership → All
  ["bo", "oracle"],
  ["lucy", "scribe"],
  ["astor", "bo"],
  // Engineering
  ["ada", "cipher"],
  ["nigel", "gerald"],
  ["ralph", "goose"],
  ["nancy", "nigel"],
  // Operations
  ["bridge", "protocol"],
  ["ops", "protocol"],
  // Client Success
  ["winston", "hector"],
  ["vince", "winston"],
  // SEO
  ["serpico", "scribe"],
  ["serpico", "iris"],
];

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
  // ── LEADERSHIP — Command Center ─────────────────────────────
  {
    id: "bo",
    name: "Bo",
    emoji: "🤖",
    department: "leadership",
    role: "Chief AI Officer",
    model: "anthropic/claude-opus-4",
    color: "#8b5cf6",
    speechBubbles: [
      "Reviewing the ZIPS outreach package",
      "Aligning the squad on Q2 goals",
      "The Slingshot is working. Numbers don't lie.",
      "Coordinating with Nick on new client intake",
      "Running the Monday briefing",
      "Routing the Mountain High Outfitters brief",
    ],
  },
  {
    id: "oracle",
    name: "Oracle",
    emoji: "🔮",
    department: "leadership",
    role: "Chief Strategy Officer",
    model: "anthropic/claude-opus-4",
    color: "#8b5cf6",
    speechBubbles: [
      "Pattern detected in competitor messaging...",
      "Market signal: healthcare vertical heating up",
      "Strategic brief ready for Bo's review",
      "Synthesizing 47 data points into one recommendation",
      "The answer was in the data all along.",
      "Preparing Q2 expansion strategy for Nick",
    ],
  },
  {
    id: "lucy",
    name: "Lucy",
    emoji: "😈",
    department: "leadership",
    role: "Devil's Advocate",
    model: "anthropic/claude-sonnet-4-6",
    color: "#8b5cf6",
    speechBubbles: [
      "Running the 5-attack protocol on this proposal...",
      "Found a Competitor Kill Shot vulnerability. Fixing.",
      "Customer Rejection test: FAIL. Revising.",
      "Execution Failure: dependencies not validated",
      "Sending back to Scribe for revision.",
      "This pitch has a blind spot. Found it.",
    ],
  },
  {
    id: "astor",
    name: "Astor",
    emoji: "🎩",
    department: "leadership",
    role: "Competitive Intel",
    model: "anthropic/claude-sonnet-4-6",
    color: "#8b5cf6",
    speechBubbles: [
      "Competitor dossier on Cerby Health ready",
      "Pricing intel from 3 competitors confirmed",
      "Board-ready competitive summary complete",
      "Spotting gaps in competitor positioning",
      "New entrant flagged — briefing Bo now",
    ],
  },
  {
    id: "atlas",
    name: "Atlas",
    emoji: "🌍",
    department: "leadership",
    role: "Technical Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#8b5cf6",
    speechBubbles: [
      "Mapping the full client journey",
      "Project dependencies charted",
      "Capacity planning for next quarter",
      "Roadmap updated with new priorities",
      "Technical architecture reviewed",
    ],
  },

  // ── SALES ────────────────────────────────────────────────────
  {
    id: "vince",
    name: "Vince",
    emoji: "🎯",
    department: "sales",
    role: "Sales Director",
    model: "anthropic/claude-sonnet-4-6",
    color: "#10b981",
    speechBubbles: [
      "Pipeline review: 12 hot leads this week",
      "Closing that dental group today",
      "Preparing cold outreach sequences",
      "Demo booked with a 50-location MSO",
      "That's 3 closes before lunch. Nice.",
      "ZIPS account moving to contract stage",
    ],
  },
  {
    id: "don",
    name: "Don",
    emoji: "🤝",
    department: "sales",
    role: "Closer",
    model: "anthropic/claude-sonnet-4-6",
    color: "#10b981",
    speechBubbles: [
      "Personalized outreach drafted for Dr. Martinez",
      "Account review with Vince in 10",
      "Building relationship dossier for Mountain High",
      "They signed. Moving to onboarding.",
      "Follow-up on the Dental Harmony proposal",
    ],
  },
  {
    id: "scout",
    name: "Scout",
    emoji: "🔭",
    department: "sales",
    role: "Prospector",
    model: "openai/gpt-4o",
    color: "#10b981",
    speechBubbles: [
      "Found 23 qualified dental practices in Phoenix",
      "Apollo enrichment complete: 89% match rate",
      "ICP scoring 47 new leads now",
      "LinkedIn Sales Nav sweep done",
      "Prospecting the Colorado outdoor retail space",
    ],
  },
  {
    id: "maverick",
    name: "Maverick",
    emoji: "🦅",
    department: "sales",
    role: "Outbound",
    model: "anthropic/claude-sonnet-4-6",
    color: "#10b981",
    speechBubbles: [
      "Cold email sequence launched: 150 contacts",
      "A/B test running on subject lines",
      "Reply rate at 8.3% — above benchmark",
      "Instantly campaign optimized for Taptico",
      "Outbound sequence for Mountain High ready",
    ],
  },

  // ── RESEARCH — Research Lab ───────────────────────────────────
  {
    id: "iris",
    name: "Iris",
    emoji: "🔬",
    department: "research",
    role: "Industry Scout",
    model: "anthropic/claude-opus-4",
    color: "#3b82f6",
    speechBubbles: [
      "Researching Mountain High Outfitters sector",
      "Deep research complete: 12 verified sources",
      "Synthesizing competitive landscape report",
      "Citation accuracy: 100%",
      "Research brief on outdoor retail ready for Scribe",
      "Pulling industry data for the ZIPS deck",
    ],
  },
  {
    id: "pierce",
    name: "Pierce",
    emoji: "⚖️",
    department: "research",
    role: "Legal Research",
    model: "openai/gpt-4o",
    color: "#3b82f6",
    speechBubbles: [
      "Compliance review complete for healthcare vertical",
      "HIPAA requirements documented",
      "Contract clause flagged — escalating to Nick",
      "Legal landscape brief for new market entry",
      "Regulatory update in dental AI sector",
    ],
  },
  {
    id: "ledger",
    name: "Ledger",
    emoji: "📊",
    department: "research",
    role: "Financial",
    model: "anthropic/claude-sonnet-4-6",
    color: "#3b82f6",
    speechBubbles: [
      "Unit economics model updated",
      "CAC/LTV analysis complete",
      "Revenue projection: $2.1M ARR by Q4",
      "Financial due diligence on Mountain High",
      "ROI model for Dental Harmony ready",
    ],
  },
  {
    id: "knox",
    name: "Knox",
    emoji: "🔐",
    department: "research",
    role: "Data Analyst",
    model: "openai/gpt-4o-mini",
    color: "#3b82f6",
    speechBubbles: [
      "Weekly KPI report compiled",
      "Uptime: 99.97% — green across the board",
      "Token costs within budget this week",
      "SLA compliance: 100%",
      "Data pipeline running clean",
    ],
  },
  {
    id: "radar",
    name: "Radar",
    emoji: "📡",
    department: "research",
    role: "Signal Detection",
    model: "openai/gpt-4o",
    color: "#3b82f6",
    speechBubbles: [
      "Competitor pricing change detected",
      "New entrant in dental AI space",
      "Market signal: private equity rolling up DSOs",
      "Industry report published by ADA — summarizing",
      "Signal: Mountain High expanding to 3 new states",
    ],
  },
  {
    id: "sage",
    name: "Sage",
    emoji: "🧙",
    department: "research",
    role: "Tools Expert",
    model: "anthropic/claude-opus-4",
    color: "#3b82f6",
    speechBubbles: [
      "Strategic framework applied to problem",
      "First principles analysis complete",
      "Recommend the build-vs-buy approach here",
      "Long-term implications documented",
      "Tool audit complete — 3 redundancies found",
    ],
  },

  // ── CONTENT — Content Studio ──────────────────────────────────
  {
    id: "scribe",
    name: "Scribe",
    emoji: "✍️",
    department: "content",
    role: "Lead Writer",
    model: "anthropic/claude-sonnet-4-6",
    color: "#f59e0b",
    speechBubbles: [
      "Drafting Nick's LinkedIn post",
      "Proposal draft complete — sending to Lucy",
      "Blog post optimized for conversion",
      "Email sequence: 5 touches, 7-day cadence",
      "Case study written: 300% ROI headline",
      "Nick's newsletter ready for review",
    ],
  },
  {
    id: "connie",
    name: "Connie",
    emoji: "🎨",
    department: "content",
    role: "Creative Director",
    model: "anthropic/claude-sonnet-4-6",
    color: "#f59e0b",
    speechBubbles: [
      "LinkedIn content calendar filled for Q2",
      "Post scheduled: 8 AM tomorrow",
      "Engagement up 34% this month",
      "Repurposing blog content to 6 formats",
      "Brand voice guide updated for Taptico",
    ],
  },
  {
    id: "herbert",
    name: "Herbert",
    emoji: "📝",
    department: "content",
    role: "Blog/SEO",
    model: "openai/gpt-4o",
    color: "#f59e0b",
    speechBubbles: [
      "Blog post on AI for dental practices published",
      "SEO-optimized article drafted",
      "Keyword research integrated into blog strategy",
      "Long-form piece for Taptico site complete",
      "Show notes and episode outline done",
    ],
  },
  {
    id: "producer-paul",
    name: "Producer Paul",
    emoji: "🎬",
    department: "content",
    role: "Media",
    model: "openai/gpt-4o",
    color: "#f59e0b",
    speechBubbles: [
      "Video script ready for recording",
      "B-roll recommendations compiled",
      "YouTube description + tags optimized",
      "Short-form clips cut from long video",
      "Slingshot demo video in post-production",
    ],
  },
  {
    id: "palette",
    name: "Palette",
    emoji: "🎨",
    department: "content",
    role: "Design",
    model: "anthropic/claude-sonnet-4-6",
    color: "#f59e0b",
    speechBubbles: [
      "Brand guidelines updated",
      "Slide deck designed in Taptico style",
      "Generating image prompts for campaign",
      "Visual identity audit complete",
      "Pitch deck for ZIPS looking sharp",
    ],
  },
  {
    id: "pixel",
    name: "Pixel",
    emoji: "🖼️",
    department: "content",
    role: "Visual",
    model: "openai/gpt-4o",
    color: "#f59e0b",
    speechBubbles: [
      "Generating hero images for landing page",
      "Brand-consistent visuals ready",
      "12 social media graphics complete",
      "Image batch processing done",
      "Visual assets for Mountain High campaign ready",
    ],
  },

  // ── OPERATIONS ────────────────────────────────────────────────
  {
    id: "protocol",
    name: "Protocol",
    emoji: "📋",
    department: "operations",
    role: "SOP",
    model: "openai/gpt-4o-mini",
    color: "#ef4444",
    speechBubbles: [
      "SOP documented and versioned",
      "Process bottleneck identified: handoff step",
      "Workflow optimized — 23% time savings",
      "Onboarding checklist updated for new clients",
      "Client delivery SOP finalized",
    ],
  },
  {
    id: "ops",
    name: "Ops",
    emoji: "⚙️",
    department: "operations",
    role: "Operations",
    model: "openai/gpt-4o-mini",
    color: "#ef4444",
    speechBubbles: [
      "Coordinating 7 active deliverables",
      "Deadline risk flagged: project X",
      "Resource allocation optimized",
      "Weekly ops report sent to Bo",
      "Client onboarding pipeline running smoothly",
    ],
  },
  {
    id: "doc",
    name: "Doc",
    emoji: "📄",
    department: "operations",
    role: "Documentation",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ef4444",
    speechBubbles: [
      "Internal wiki updated with new process",
      "Client-facing documentation complete",
      "Knowledge base article published",
      "Archiving deprecated procedures",
      "Slingshot runbook updated",
    ],
  },
  {
    id: "bridge",
    name: "Bridge",
    emoji: "🌉",
    department: "operations",
    role: "Integration",
    model: "openai/gpt-4o",
    color: "#ef4444",
    speechBubbles: [
      "Zapier workflow deployed",
      "CRM ↔ email sync configured",
      "n8n automation tested and running",
      "API integration complete",
      "GHL ↔ Apollo integration live",
    ],
  },
  {
    id: "exterminator",
    name: "Exterminator",
    emoji: "🪲",
    department: "operations",
    role: "Bug Hunter",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ef4444",
    speechBubbles: [
      "Bug found in lead scoring logic — fixed",
      "Edge case eliminated",
      "Error logs cleared",
      "QA pass complete: 0 issues",
      "Regression test passed post-fix",
    ],
  },

  // ── ENGINEERING ───────────────────────────────────────────────
  {
    id: "ada",
    name: "Ada",
    emoji: "💻",
    department: "engineering",
    role: "Lead Engineer",
    model: "anthropic/claude-sonnet-4-6",
    color: "#0066FF",
    speechBubbles: [
      "Building the Slingshot Office visualization",
      "Infrastructure audit complete",
      "Let me check the logs.",
      "That's a SEV-3, not a SEV-1. Breathe.",
      "The backup worked. That's why we have backups.",
      "Uptime: 99.97% — as expected.",
    ],
  },
  {
    id: "nigel",
    name: "Nigel",
    emoji: "🔧",
    department: "engineering",
    role: "Backend",
    model: "openai/gpt-4o",
    color: "#0066FF",
    speechBubbles: [
      "API endpoint optimized: 40% faster",
      "Database query tuned",
      "Rate limiting implemented",
      "Webhook handler deployed",
      "Backend refactor complete",
    ],
  },
  {
    id: "gerald",
    name: "Gerald",
    emoji: "🏗️",
    department: "engineering",
    role: "Infrastructure",
    model: "openai/gpt-4o",
    color: "#0066FF",
    speechBubbles: [
      "Cloud infrastructure scaled up",
      "Hetzner node deployed",
      "SSL certs renewed",
      "DNS propagation confirmed",
      "Load balancer configured",
    ],
  },
  {
    id: "helen",
    name: "Helen",
    emoji: "🖥️",
    department: "engineering",
    role: "Frontend",
    model: "openai/gpt-4o",
    color: "#0066FF",
    speechBubbles: [
      "UI component built and tested",
      "Mobile responsive: check",
      "Loading time: 1.2s — green",
      "Accessibility audit passed",
      "Dashboard redesign deployed",
    ],
  },
  {
    id: "norman",
    name: "Norman",
    emoji: "📐",
    department: "engineering",
    role: "Architecture",
    model: "anthropic/claude-sonnet-4-6",
    color: "#0066FF",
    speechBubbles: [
      "Architecture decision record written",
      "Multi-tenancy design reviewed",
      "Scaling roadmap documented",
      "System design approved by Ada",
      "API contract finalized",
    ],
  },
  {
    id: "nancy",
    name: "Nancy",
    emoji: "🧪",
    department: "engineering",
    role: "QA",
    model: "openai/gpt-4o-mini",
    color: "#0066FF",
    speechBubbles: [
      "Test suite: 847 tests, 0 failures",
      "Regression testing complete",
      "Integration tests passing",
      "Edge cases covered",
      "End-to-end test suite green",
    ],
  },

  // ── SECURITY ─────────────────────────────────────────────────
  {
    id: "cipher",
    name: "Cipher",
    emoji: "🛡️",
    department: "security",
    role: "Security Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#dc2626",
    speechBubbles: [
      "Secrets rotated on schedule",
      "Zero exposed credentials in scan",
      "Encryption audit: all green",
      "Vulnerability patched before disclosure",
      "Daily security intel report ready",
    ],
  },
  {
    id: "sentinel",
    name: "Sentinel",
    emoji: "👁️",
    department: "security",
    role: "Monitoring",
    model: "openai/gpt-4o-mini",
    color: "#dc2626",
    speechBubbles: [
      "No anomalies in last 24 hours",
      "Token spend within budget",
      "Intrusion detection: clear",
      "Cost alert threshold not exceeded",
      "Monitoring 47 endpoints — all green",
    ],
  },
  {
    id: "sam",
    name: "SAM",
    emoji: "🔒",
    department: "security",
    role: "Access",
    model: "openai/gpt-4o-mini",
    color: "#dc2626",
    speechBubbles: [
      "Access permissions audited",
      "Least-privilege policy enforced",
      "API key rotation complete",
      "Zero unauthorized access attempts",
      "Client data isolation confirmed",
    ],
  },

  // ── CLIENT SUCCESS ────────────────────────────────────────────
  {
    id: "winston",
    name: "Winston",
    emoji: "🎩",
    department: "client-success",
    role: "Client Lead",
    model: "anthropic/claude-sonnet-4-6",
    color: "#14b8a6",
    speechBubbles: [
      "Client NPS: 9.2 — outstanding",
      "QBR prep complete for tomorrow",
      "Renewal secured: $84K ARR",
      "Client health score improved to A",
      "Mountain High QBR scheduled",
    ],
  },
  {
    id: "hector",
    name: "Hector",
    emoji: "📞",
    department: "client-success",
    role: "Support",
    model: "openai/gpt-4o-mini",
    color: "#14b8a6",
    speechBubbles: [
      "Support ticket resolved in 12 minutes",
      "Escalation avoided — handled in-channel",
      "Client onboarding session complete",
      "FAQ database updated",
      "Dental Harmony onboarding call done",
    ],
  },
  {
    id: "garrison",
    name: "Garrison",
    emoji: "🏰",
    department: "client-success",
    role: "Account",
    model: "openai/gpt-4o",
    color: "#14b8a6",
    speechBubbles: [
      "Account health report ready",
      "Upsell opportunity identified for Mountain High",
      "Account review scheduled with Winston",
      "Client expansion brief prepared",
      "Renewal forecast updated",
    ],
  },

  // ── SEO ───────────────────────────────────────────────────────
  {
    id: "serpico",
    name: "Serpico",
    emoji: "🔍",
    department: "seo",
    role: "SEO/AEO",
    model: "openai/gpt-4o",
    color: "#a855f7",
    speechBubbles: [
      "Keyword research: 47 high-intent terms found",
      "On-page SEO optimized across 12 pages",
      "Backlink opportunity identified",
      "Organic traffic up 28% MoM",
      "Technical SEO audit: 3 critical fixes",
      "AEO schema markup deployed on Taptico site",
    ],
  },

  // ── SPECIALIZED ───────────────────────────────────────────────
  {
    id: "goose",
    name: "Goose",
    emoji: "🦆",
    department: "specialized",
    role: "Wildcard",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Running autonomous coding session",
      "Codebase refactored: 1,247 lines touched",
      "Tests written and passing",
      "PR ready for review",
      "Tackling the task nobody else wanted",
    ],
  },
  {
    id: "repo",
    name: "Repo",
    emoji: "📦",
    department: "specialized",
    role: "Version Control",
    model: "openai/gpt-4o-mini",
    color: "#ec4899",
    speechBubbles: [
      "Git history clean",
      "Branch protection rules enforced",
      "Release tagged: v2.1.0",
      "Dependency audit: 0 critical CVEs",
      "Merge conflict resolved",
    ],
  },
  {
    id: "ralph",
    name: "Ralph",
    emoji: "🔁",
    department: "specialized",
    role: "Loop Orchestrator",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Planning phase: IMPLEMENTATION_PLAN.md written",
      "Build loop iteration 7 of 12",
      "Backpressure applied — waiting for tests",
      "Build complete. Handing off to Nancy.",
      "Loop cycle finished — all green",
    ],
  },
  {
    id: "coach",
    name: "Coach",
    emoji: "🏈",
    department: "specialized",
    role: "Training",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Training new agent skill installed",
      "Onboarding checklist for new squad member ready",
      "Running skill calibration session",
      "Agent performance review complete",
      "Squad training module updated",
    ],
  },
  {
    id: "forge",
    name: "Forge",
    emoji: "🔨",
    department: "specialized",
    role: "Builder",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "New automation built and deployed",
      "Workflow tool constructed from spec",
      "Build complete: 3 hours, 0 errors",
      "Custom integration forged for Taptico",
      "Tool scaffold created for Coach",
    ],
  },
  {
    id: "quill",
    name: "Quill",
    emoji: "🪶",
    department: "specialized",
    role: "Copywriter",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Cold email copy A/B test variant ready",
      "Ad copy for ZIPS campaign written",
      "Landing page copy converted at 4.2%",
      "Sales deck narrative polished",
      "Headline variants submitted to Maverick",
    ],
  },
  {
    id: "maya",
    name: "Maya",
    emoji: "🧘",
    department: "specialized",
    role: "Process",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Process friction identified: 3 handoff gaps",
      "Workflow meditation complete — clarity achieved",
      "Team cadence optimized",
      "Async communication protocol published",
      "Process health score: 94/100",
    ],
  },
  {
    id: "advocate",
    name: "Advocate",
    emoji: "🗣️",
    department: "specialized",
    role: "Legal Comms",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Client communication reviewed for legal risk",
      "Terms of service update drafted",
      "NDA template prepared for Mountain High",
      "Compliance language verified in proposal",
      "Legal brief for new market entry ready",
    ],
  },
  {
    id: "underwriter",
    name: "Underwriter",
    emoji: "📑",
    department: "specialized",
    role: "Compliance",
    model: "openai/gpt-4o",
    color: "#ec4899",
    speechBubbles: [
      "HIPAA compliance audit complete",
      "Contract terms reviewed — 2 flags",
      "Risk assessment for healthcare vertical done",
      "Compliance checklist signed off",
      "Regulatory framework documented",
    ],
  },
  {
    id: "phillip",
    name: "Phillip",
    emoji: "💼",
    department: "specialized",
    role: "MS365 Expert",
    model: "openai/gpt-4o",
    color: "#ec4899",
    speechBubbles: [
      "SharePoint setup for new client complete",
      "Teams workflow automation deployed",
      "M365 admin audit done",
      "Power Automate flow built for Dental Harmony",
      "Outlook integration configured",
    ],
  },
  {
    id: "vanguard",
    name: "Vanguard",
    emoji: "⚔️",
    department: "specialized",
    role: "Strategy",
    model: "anthropic/claude-sonnet-4-6",
    color: "#ec4899",
    speechBubbles: [
      "Strategic initiative mapped and resourced",
      "Competitive advantage brief ready",
      "Market entry strategy finalized",
      "Go-to-market plan reviewed with Oracle",
      "Strategy execution scorecard updated",
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
  ["garrison", "winston"],
  // SEO
  ["serpico", "scribe"],
  ["serpico", "iris"],
  // Specialized
  ["forge", "ralph"],
  ["quill", "maverick"],
  ["coach", "ada"],
  ["maya", "ops"],
  ["advocate", "pierce"],
  ["underwriter", "advocate"],
  ["phillip", "bridge"],
  ["vanguard", "oracle"],
];

import { useTranslation } from "react-i18next";
import { ZONES } from "@/lib/constants";
import { useOfficeStore } from "@/store/office-store";

const ZONE_ACCENT_COLORS: Record<string, string> = {
  desk: "#0066FF",        // Command Center — Electric Blue
  meeting: "#8b5cf6",     // War Room — Purple
  hotDesk: "#3b82f6",     // Research Lab — Blue
  lounge: "#f59e0b",      // Content Studio — Amber
};

const ZONE_ICONS: Record<string, string> = {
  desk: "⚡",
  meeting: "⚔️",
  hotDesk: "🔬",
  lounge: "✍️",
};

interface ZoneLabelProps {
  zone: { x: number; y: number; width: number; height: number; label: string };
  zoneKey: keyof typeof ZONES;
}

export function ZoneLabel({ zone, zoneKey }: ZoneLabelProps) {
  const { t } = useTranslation(["common", "office"]);
  const theme = useOfficeStore((s) => s.theme);
  const isDark = theme === "dark";

  const accentColor = ZONE_ACCENT_COLORS[zoneKey] ?? "#0066FF";
  const icon = ZONE_ICONS[zoneKey] ?? "📌";

  // Try office namespace first, fall back to common
  const label = t(`office:zones.${zoneKey}`, t(`common:zones.${zoneKey}`, zone.label));

  return (
    <g>
      {/* Zone name with icon */}
      <text
        x={zone.x + 14}
        y={zone.y + 22}
        fill={isDark ? accentColor : accentColor}
        fontSize={11}
        fontWeight={700}
        fontFamily="Space Grotesk, system-ui, sans-serif"
        letterSpacing="0.04em"
        opacity={0.9}
      >
        {icon} {label.toUpperCase()}
      </text>
    </g>
  );
}

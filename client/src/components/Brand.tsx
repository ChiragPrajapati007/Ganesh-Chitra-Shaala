/** The Atelier Procession: a precise typographic mark paired with a single sculptor's gesture. */
import { Link } from "wouter";
import { siteConfig } from "@/lib/data";

export function Brand({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className={`brand-mark ${inverted ? "brand-mark--inverted" : ""}`} aria-label={siteConfig.brand}>
      <img src={siteConfig.images.logo} alt="" className="brand-mark__symbol" />
      {!compact && <span className="brand-mark__word">Ganesh <em>Chitra</em> Shaala</span>}
    </Link>
  );
}

export function SectionLabel({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? "section-label--light" : ""}`}><span>{index}</span>{children}</p>;
}

export function GestureDivider({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <div className={`gesture-divider ${light ? "gesture-divider--light" : ""} ${compact ? "gesture-divider--compact" : ""}`} aria-hidden="true"><i /><img src={siteConfig.images.logo} alt="" /><i /></div>;
}

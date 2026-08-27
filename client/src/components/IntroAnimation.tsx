/** The Atelier Procession: a calm SVG stroke-draw, designed to feel like the first mark in a sketchbook. */
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const [reduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    // 2.85 seconds total: 2.4 seconds to draw and hold the familiar Ganapati form, then a 450ms dissolve.
    const duration = reduced ? 120 : 2400;
    const timer = window.setTimeout(() => finish(), duration);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  const finish = () => {
    setLeaving(true);
    window.setTimeout(onDone, reduced ? 0 : 500);
  };

  return (
    <div className={`intro ${leaving ? "intro--leaving" : ""}`} role="dialog" aria-label="Ganesh Chitra Shaala introduction">
      <div className="paper-grain" />
      <div className="intro__center">
        <svg viewBox="0 0 400 440" className="intro__ganapati" aria-label="Stylised Ganapati illustration">
          <path className="intro-stroke intro-stroke--crown" d="M200 30 L229 59 L220 82 M200 30 L171 59 L180 82 M164 90 Q200 69 236 90" />
          <path className="intro-stroke intro-stroke--ears" d="M168 108 C124 86 76 107 66 157 C57 202 88 232 122 215 C146 203 158 178 166 151 M232 108 C276 86 324 107 334 157 C343 202 312 232 278 215 C254 203 242 178 234 151" />
          <path className="intro-stroke intro-stroke--trunk" d="M185 111 C168 151 172 198 193 225 C211 248 206 282 182 300 C160 317 135 304 136 278" />
          <path className="intro-stroke intro-stroke--face" d="M197 125 Q200 121 203 125 M190 157 Q200 164 210 157" />
          <path className="intro-stroke intro-stroke--body" d="M150 226 C109 244 95 288 118 322 C139 351 174 356 194 330 M250 226 C291 244 305 288 282 322 C261 351 226 356 206 330" />
          <path className="intro-stroke intro-stroke--base" d="M122 345 Q200 382 278 345 M136 370 Q200 399 264 370" />
          <circle className="intro-dot" cx="200" cy="101" r="5" />
        </svg>
        <div className="intro__copy">
          <p className="intro__pretitle">A studio of hand-shaped celebration</p>
          <h1>Ganesh <em>Chitra</em> Shaala</h1>
        </div>
      </div>
      <button className="intro__skip" onClick={finish}>Skip <span>→</span></button>
    </div>
  );
}

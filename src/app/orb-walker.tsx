"use client";

import { useEffect, useRef } from "react";

const CHUNKS = [
  { ox: 0, oy: -1, phase: 0, origin: "60px 42px" },
  { ox: -1, oy: -0.12, phase: 1.4, origin: "28px 56px" },
  { ox: 1, oy: 0.08, phase: 2.7, origin: "92px 59px" },
  { ox: 0, oy: 1, phase: 4.1, origin: "60px 80px" },
] as const;

export function OrbWalker() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbEl = orbRef.current;
    if (!orbEl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const chunks = Array.from(orbEl.querySelectorAll<SVGGElement>(".orb-chunk"));

    let x = Math.max(32, Math.min(window.innerWidth - 32, window.innerWidth * 0.2));
    let y = Math.max(32, Math.min(window.innerHeight - 32, window.innerHeight * 0.35));
    let vx = 0.22;
    let vy = 0.16;
    let t = 0;
    const size = 78;
    let raf = 0;
    let mx = window.innerWidth * 0.5;
    let my = window.innerHeight * 0.5;

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function step() {
      const el = orbRef.current;
      if (!el) return;

      t += 0.03;

      const cx = x + size * 0.5;
      const cy = y + size * 0.5;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const pull = Math.min(0.045, (18 / dist) * 0.02);

      vx += (dx / dist) * pull;
      vy += (dy / dist) * pull;

      let speed = Math.hypot(vx, vy);
      if (speed > 0.95) {
        vx = (vx / speed) * 0.95;
        vy = (vy / speed) * 0.95;
      }

      vx *= 0.992;
      vy *= 0.992;

      x += vx;
      y += vy;

      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;

      if (x <= 0 || x >= maxX) {
        vx = -vx * 0.94;
        x = Math.max(0, Math.min(maxX, x));
      }
      if (y <= 0 || y >= maxY) {
        vy = -vy * 0.94;
        y = Math.max(0, Math.min(maxY, y));
      }

      const pulse = (Math.sin(t * 0.62) + 1) / 2;
      const pulseEase = pulse * pulse * (3 - 2 * pulse);
      const wobbleAmp = 0.6 + pulseEase * 2.4;

      const spine = 8 + pulseEase * 7 + Math.sin(t * 4.1) * 2.5;
      const rot = t * 38;
      const tilt = Math.sin(t * 1.1) * 4 + (dx / Math.max(1, window.innerWidth)) * 20;
      const bank = Math.sin(t * 1.4) * 3 + (dy / Math.max(1, window.innerHeight)) * -16;

      el.style.setProperty("--orb-spine", `${spine.toFixed(2)}px`);
      el.style.setProperty("--orb-rot", `${rot.toFixed(2)}deg`);
      el.style.setProperty("--orb-tilt", `${tilt.toFixed(2)}deg`);
      el.style.setProperty("--orb-bank", `${bank.toFixed(2)}deg`);
      el.style.setProperty("--orb-pulse", pulseEase.toFixed(3));
      el.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0)`;

      const spread = pulseEase * 9;

      chunks.forEach((chunk, i) => {
        const c = CHUNKS[i];
        if (!c) return;

        const wobX = Math.sin(t * 2.4 + c.phase) * wobbleAmp;
        const wobY = Math.cos(t * 1.85 + c.phase * 1.15) * wobbleAmp;
        const wobR = Math.sin(t * 1.55 + c.phase * 0.9) * (1.5 + pulseEase * 5);
        const tx = c.ox * spread + wobX;
        const ty = c.oy * spread + wobY;
        const scale = 1 + pulseEase * 0.035 + Math.sin(t * 3.2 + c.phase) * 0.012;

        chunk.style.transform = `translate(${tx.toFixed(2)}px,${ty.toFixed(2)}px) rotate(${wobR.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      });

      raf = requestAnimationFrame(step);
    }

    function onResize() {
      x = Math.min(x, Math.max(0, window.innerWidth - size));
      y = Math.min(y, Math.max(0, window.innerHeight - size));
      mx = Math.min(Math.max(0, mx), window.innerWidth);
      my = Math.min(Math.max(0, my), window.innerHeight);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={orbRef} id="orb-walker" aria-hidden="true" className="orb-walker">
      <svg viewBox="0 0 120 120" role="presentation">
        <g className="orb-wire">
          <g className="orb-chunk" style={{ transformOrigin: CHUNKS[0].origin }}>
            <polyline className="orb-edge" points="60,10 84,22 60,34 36,22 60,10" />
            <polyline className="orb-edge" points="36,22 36,62 60,74 60,34" />
            <polyline className="orb-edge" points="84,22 84,62 60,74" />
            <line className="orb-spine" x1="60" y1="10" x2="60" y2="-4" />
            <line className="orb-spine" x1="84" y1="22" x2="96" y2="16" />
            <line className="orb-spine" x1="36" y1="22" x2="24" y2="16" />
          </g>

          <g className="orb-chunk" style={{ transformOrigin: CHUNKS[1].origin }}>
            <polyline className="orb-edge" points="28,34 44,42 28,50 12,42 28,34" />
            <polyline className="orb-edge" points="12,42 12,70 28,78 28,50" />
            <polyline className="orb-edge" points="44,42 44,70 28,78" />
            <line className="orb-spine" x1="28" y1="78" x2="18" y2="88" />
            <line className="orb-spine" x1="12" y1="42" x2="0" y2="42" />
          </g>

          <g className="orb-chunk" style={{ transformOrigin: CHUNKS[2].origin }}>
            <polyline className="orb-edge" points="92,38 108,46 92,54 76,46 92,38" />
            <polyline className="orb-edge" points="76,46 76,72 92,80 92,54" />
            <polyline className="orb-edge" points="108,46 108,72 92,80" />
            <line className="orb-spine" x1="108" y1="46" x2="120" y2="46" />
            <line className="orb-spine" x1="92" y1="80" x2="102" y2="90" />
          </g>

          <g className="orb-chunk" style={{ transformOrigin: CHUNKS[3].origin }}>
            <polyline className="orb-edge" points="60,60 74,67 60,74 46,67 60,60" />
            <polyline className="orb-edge" points="46,67 46,92 60,99 60,74" />
            <polyline className="orb-edge" points="74,67 74,92 60,99" />
            <line className="orb-spine" x1="60" y1="99" x2="60" y2="112" />
          </g>
        </g>
      </svg>
    </div>
  );
}

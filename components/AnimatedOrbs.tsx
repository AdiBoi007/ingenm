"use client";

interface Orb {
  w: number;
  h: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string;
  anim: string;
}

interface OrbsProps {
  variant?: "default" | "green" | "dark";
}

const ORBS: Record<string, Orb[]> = {
  green: [
    { w: 500, h: 500, top: "-10%", left: "-15%", color: "rgba(29,184,122,0.18)", anim: "float-slow" },
    { w: 380, h: 380, top: "20%", right: "-10%", color: "rgba(93,217,164,0.14)", anim: "float-med" },
    { w: 280, h: 280, bottom: "5%", left: "30%", color: "rgba(29,184,122,0.12)", anim: "float-fast" },
  ],
  dark: [
    { w: 400, h: 400, top: "-20%", left: "10%", color: "rgba(255,107,43,0.12)", anim: "float-slow" },
    { w: 300, h: 300, bottom: "-10%", right: "5%", color: "rgba(29,184,122,0.08)", anim: "float-med" },
  ],
  default: [
    { w: 600, h: 600, top: "-20%", left: "-15%", color: "rgba(255,107,43,0.12)", anim: "float-slow" },
    { w: 450, h: 450, top: "10%", right: "-10%", color: "rgba(255,200,150,0.14)", anim: "float-med" },
    { w: 350, h: 350, bottom: "-10%", left: "20%", color: "rgba(29,184,122,0.1)", anim: "float-fast" },
    { w: 250, h: 250, top: "40%", left: "40%", color: "rgba(255,107,43,0.08)", anim: "float-slow" },
  ],
};

export default function AnimatedOrbs({ variant = "default" }: OrbsProps) {
  const orbs = ORBS[variant] ?? ORBS.default;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`orb animate-${orb.anim}`}
          style={{
            width: orb.w,
            height: orb.h,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            background: orb.color,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}
    </div>
  );
}

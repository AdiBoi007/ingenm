"use client";

const ITEMS = [
  "Research-grade intelligence",
  "University of Sydney",
  "Proof-based verification",
  "Zero guesswork",
  "Built for speed",
  "Aristotle",
  "Sherlock",
  "Columbus",
  "Verified talent",
  "Real methodology",
  "No more noise",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="w-full overflow-hidden border-y border-border bg-surface py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6">
            <span className="font-mono-dm text-xs text-muted uppercase tracking-widest">
              {item}
            </span>
            <span className="text-orange text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

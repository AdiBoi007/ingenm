"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCAN_DURATION = 3200;
const RESULT_SHOW = 2200;

const PROOF_TAGS = [
  { label: "GitHub: 847 commits", verified: true },
  { label: "React · TypeScript", verified: true },
  { label: "Open-source contributor", verified: true },
  { label: "3 yrs experience", verified: true },
  { label: "Cold claim: 'AWS expert'", verified: false },
];

export default function SherlockMockUI() {
  const [phase, setPhase] = useState<"idle" | "scanning" | "result">("idle");
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const run = () => {
      setPhase("idle");
      setScanProgress(0);

      t1 = setTimeout(() => {
        setPhase("scanning");
        let p = 0;
        interval = setInterval(() => {
          p += 100 / (SCAN_DURATION / 40);
          setScanProgress(Math.min(p, 100));
          if (p >= 100) clearInterval(interval);
        }, 40);
      }, 600);

      t2 = setTimeout(() => {
        setPhase("result");
      }, 600 + SCAN_DURATION);

      t3 = setTimeout(run, 600 + SCAN_DURATION + RESULT_SHOW + 800);
    };

    run();
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-surface border border-border rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-charcoal px-5 py-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green/60" />
          </div>
          <span className="font-mono-dm text-xs text-white/50 ml-2">
            sherlock.ingen.ai
          </span>
        </div>

        <div className="p-6 space-y-4">
          {/* Input */}
          <div className="flex items-center gap-2 bg-bg border border-border rounded-xl px-4 py-3">
            <span className="text-muted text-sm">🔗</span>
            <span className="font-mono-dm text-xs text-ink flex-1 truncate">
              linkedin.com/in/alex-chen-dev
            </span>
            <motion.div
              animate={phase === "scanning" ? { rotate: 360 } : {}}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-4 h-4 border-2 border-orange border-t-transparent rounded-full"
              style={{ display: phase === "scanning" ? "block" : "none" }}
            />
          </div>

          {/* Scan bar */}
          <AnimatePresence>
            {phase === "scanning" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-mono-dm text-xs text-muted">
                    Scanning profile...
                  </span>
                  <span className="font-mono-dm text-xs text-orange">
                    {Math.round(scanProgress)}%
                  </span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange to-orange/60 rounded-full"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["GitHub", "LinkedIn", "Projects", "Claims"].map((src, i) => (
                    <motion.span
                      key={src}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.3 }}
                      className="font-mono-dm text-[10px] bg-orange/10 text-orange px-2 py-0.5 rounded-full"
                    >
                      ✓ {src}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result */}
          <AnimatePresence>
            {phase === "result" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Score badge */}
                <div className="flex items-center gap-4 bg-green/8 border border-green/20 rounded-xl p-4">
                  <div className="w-14 h-14 rounded-full bg-green/15 flex items-center justify-center border-2 border-green/30">
                    <span className="font-clash text-xl font-bold text-green">
                      92
                    </span>
                  </div>
                  <div>
                    <p className="font-clash text-lg font-semibold text-ink">
                      Alex Chen
                    </p>
                    <p className="font-mono-dm text-xs text-green uppercase tracking-wider">
                      ✓ Strong fit
                    </p>
                  </div>
                </div>

                {/* Proof tags */}
                <div className="space-y-2">
                  {PROOF_TAGS.map((tag, i) => (
                    <motion.div
                      key={tag.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`flex items-center gap-2 text-xs font-mono-dm px-3 py-2 rounded-lg ${
                        tag.verified
                          ? "bg-green/6 text-ink"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      <span>{tag.verified ? "✓" : "⚠"}</span>
                      {tag.label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle state */}
          {phase === "idle" && (
            <div className="text-center py-4">
              <p className="font-mono-dm text-xs text-muted">
                Awaiting profile URL...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Floating glow */}
      <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-gradient-to-br from-orange to-transparent rounded-3xl" />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JOBS = [
  { company: "Atlassian", role: "Junior SWE", match: 96, tag: "Remote" },
  { company: "Canva", role: "Frontend Engineer", match: 91, tag: "Sydney" },
  { company: "Afterpay", role: "Data Analyst", match: 88, tag: "Hybrid" },
  { company: "SafetyCulture", role: "Full-Stack Dev", match: 84, tag: "Sydney" },
];

export default function ColumbusDiscovery() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setVisible([]);
      JOBS.forEach((_, i) => {
        timers.push(
          setTimeout(() => setVisible((v) => [...v, i]), 400 + i * 500)
        );
      });
      timers.push(
        setTimeout(() => {
          setVisible([]);
          setTimeout(run, 800);
        }, 400 + JOBS.length * 500 + 2000)
      );
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-surface border border-border rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-charcoal px-5 py-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green/60" />
          </div>
          <span className="font-mono-dm text-xs text-white/50 ml-2">
            columbus.ingen.ai
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="font-mono-dm text-xs text-muted">Discovering roles for</span>
            <span className="font-mono-dm text-xs text-green bg-green/10 px-2 py-0.5 rounded-full">Alex M.</span>
          </div>

          <div className="space-y-3 min-h-[240px]">
            <AnimatePresence>
              {JOBS.map((job, i) =>
                visible.includes(i) ? (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between bg-bg border border-border rounded-xl px-4 py-3"
                  >
                    <div>
                      <p className="font-clash text-sm font-semibold text-ink">{job.company}</p>
                      <p className="font-jakarta text-xs text-muted">{job.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-dm text-[10px] text-muted bg-border px-2 py-0.5 rounded-full">
                        {job.tag}
                      </span>
                      <span className="font-mono-dm text-xs font-medium text-green">
                        {job.match}%
                      </span>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-gradient-to-br from-green to-transparent rounded-3xl" />
    </div>
  );
}

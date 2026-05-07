"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const triggerConfig = {
  start: "top 80%",
  end: "top 20%",
  toggleActions: "play none none reverse",
};

export function useEditorialAnimations(scope?: RefObject<HTMLElement>) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-section").forEach((section) => {
        const label = section.querySelector(".section-label");
        const words = section.querySelectorAll(".headline-word > span");
        const copy = section.querySelector(".section-copy");
        const mocks = section.querySelectorAll(".mock-card");
        const featureCards = section.querySelectorAll(".feature-card");

        if (label) {
          gsap.fromTo(label, { opacity: 0, x: -28 }, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: section, ...triggerConfig },
          });
        }

        if (words.length) {
          gsap.fromTo(words, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            stagger: 0.045,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: section, ...triggerConfig },
          });
        }

        if (copy) {
          gsap.fromTo(copy, { opacity: 0, y: 24 }, {
            opacity: 1,
            y: 0,
            delay: 0.18,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: section, ...triggerConfig },
          });
        }

        mocks.forEach((mock) => {
          gsap.fromTo(mock, { opacity: 0, scale: 0.95 }, {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: section, ...triggerConfig },
          });
        });

        featureCards.forEach((card, index) => {
          gsap.fromTo(card, { opacity: 0, x: index % 2 === 0 ? -36 : 36 }, {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: card, ...triggerConfig },
          });
        });
      });

      gsap.utils.toArray<HTMLElement>(".stat-card").forEach((card, index) => {
        gsap.fromTo(card, { opacity: 0, y: 46 }, {
          opacity: 1,
          y: 0,
          delay: index * 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, ...triggerConfig },
        });

        const value = card.querySelector<HTMLElement>("[data-count]");
        if (!value) return;
        const target = Number(value.dataset.count || 0);
        const suffix = value.dataset.suffix || "";
        const counter = { value: 0 };

        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          onEnter: () => {
            gsap.to(counter, {
              value: target,
              duration: 1.6,
              ease: "power3.out",
              onUpdate: () => {
                value.textContent = `${Math.round(counter.value)}${suffix}`;
              },
            });
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, [scope]);
}

export function AnnouncementBar() {
  const text = "✦ Research-grade intelligence · Built with researchers at the University of Sydney";

  return (
    <div className="h-8 overflow-hidden bg-[#111111] text-white">
      <div className="announcement-track flex h-full min-w-max items-center justify-center md:min-w-0">
        {[0, 1].map((item) => (
          <p
            key={item}
            className="w-screen shrink-0 px-8 text-center font-mono text-xs text-white/80 md:w-auto"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`section-label mb-5 font-mono text-xs uppercase tracking-[0.2em] ${dark ? "text-white/45" : "text-[#999]"}`}>
      {children}
    </p>
  );
}

export function SplitHeadline({ children, className = "", dark = false }: { children: string; className?: string; dark?: boolean }) {
  return (
    <h2 className={`font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.0] tracking-tight ${dark ? "text-white" : "text-ink"} ${className}`}>
      {children.split(" ").map((word, index) => (
        <span className="headline-word mr-[0.18em]" key={`${word}-${index}`}>
          <span>{word}</span>
        </span>
      ))}
    </h2>
  );
}

export function CTAButton({ href, children, green = false, dark = false }: { href: string; children: React.ReactNode; green?: boolean; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-8 py-4 font-body text-sm font-semibold transition duration-300 hover:scale-105 ${
        green
          ? "bg-green text-white shadow-lg shadow-green/20"
          : dark
            ? "bg-white text-ink"
            : "bg-orange text-white shadow-lg shadow-orange/25"
      }`}
    >
      {children}
    </Link>
  );
}

export function HeroWords({ lines }: { lines: { text: string; className?: string }[] }) {
  let wordIndex = 0;

  return (
    <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.95] tracking-tight text-ink">
      {lines.map((line) => (
        <span className={`block ${line.className || ""}`} key={line.text}>
          {line.text.split(" ").map((word) => {
            const delay = wordIndex * 0.1;
            wordIndex += 1;
            return (
              <motion.span
                key={`${word}-${wordIndex}`}
                className="mr-[0.16em] inline-block overflow-hidden align-bottom"
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export function ProductFrame({ tone, children }: { tone: "sherlock" | "aristotle" | "columbus" | "dark"; children: React.ReactNode }) {
  const bg = {
    sherlock: "bg-[#1a1a1a]",
    aristotle: "bg-[#2a1500]",
    columbus: "bg-[#001a0e]",
    dark: "bg-white",
  }[tone];

  return (
    <div className={`mock-card editorial-shadow rounded-2xl ${bg} p-4 md:p-8 overflow-hidden`}>
      {children}
    </div>
  );
}

export function SherlockLoop({ inverted = false }: { inverted?: boolean }) {
  const tags = ["GitHub ✓", "LinkedIn ✓", "Projects ✓", "Claims ✓"];

  return (
    <div className={`mx-auto max-w-xl rounded-2xl border ${inverted ? "border-[#EDE8E3] bg-[#FDF8F4]" : "border-white/10 bg-[#101010]"} p-5`}>
      <div className="mb-6 flex items-center justify-between">
        <p className={`font-mono text-xs ${inverted ? "text-ink/50" : "text-white/45"}`}>sherlock://verify</p>
        <span className="rounded-full bg-orange px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">Live</span>
      </div>
      <motion.div
        className={`mb-4 rounded-xl border px-4 py-4 font-mono text-xs ${inverted ? "border-border bg-white text-ink" : "border-white/10 bg-white/5 text-white/70"}`}
        animate={{ opacity: [0.5, 1, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        linkedin.com/in/sarah-kim-ai
      </motion.div>
      <div className={`h-2 overflow-hidden rounded-full ${inverted ? "bg-border" : "bg-white/10"}`}>
        <motion.div
          className="h-full rounded-full bg-orange"
          animate={{ width: ["0%", "100%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {tags.map((tag, index) => (
          <motion.div
            key={tag}
            className={`rounded-full px-3 py-2 text-center font-mono text-[11px] ${inverted ? "bg-white text-ink" : "bg-white/8 text-white"}`}
            animate={{ opacity: [0, 0, 1, 1, 0], y: [12, 12, 0, 0, -6] }}
            transition={{ repeat: Infinity, duration: 3, delay: index * 0.14 }}
          >
            {tag}
          </motion.div>
        ))}
      </div>
      <motion.div
        className={`mt-6 flex items-end justify-between rounded-2xl p-5 ${inverted ? "bg-white" : "bg-white/8"}`}
        animate={{ opacity: [0, 0, 1, 1, 0], x: [30, 30, 0, 0, 15] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
      >
        <div>
          <p className={`font-body text-sm ${inverted ? "text-ink/50" : "text-white/50"}`}>Verified fit score</p>
          <p className={`font-display text-7xl font-bold leading-none ${inverted ? "text-ink" : "text-white"}`}>91</p>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-green">Hire-ready</p>
      </motion.div>
    </div>
  );
}

export function AristotleLoop({ inverted = false }: { inverted?: boolean }) {
  const candidates = [
    ["Maya R.", "AI Research · Python", 94],
    ["Leo C.", "Frontend · React", 89],
    ["Nina S.", "Data · SQL", 86],
  ];

  return (
    <div className={`mx-auto max-w-xl rounded-2xl border ${inverted ? "border-[#EDE8E3] bg-[#FDF8F4]" : "border-white/10 bg-[#130A02]"} p-5`}>
      <p className={`mb-6 font-mono text-xs ${inverted ? "text-ink/50" : "text-white/45"}`}>aristotle://shortlist</p>
      <div className="space-y-3">
        {candidates.map(([name, tags, score], index) => (
          <motion.div
            key={name}
            className={`rounded-2xl border p-4 ${inverted ? "border-border bg-white" : "border-white/10 bg-white/8"}`}
            animate={{ opacity: [0, 1, 1, 0], y: [40, 0, 0, -18] }}
            transition={{ repeat: Infinity, duration: 4, delay: index * 0.22 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`font-display text-2xl font-semibold ${inverted ? "text-ink" : "text-white"}`}>{name}</p>
                <p className={`font-mono text-[11px] uppercase tracking-widest ${inverted ? "text-ink/45" : "text-white/45"}`}>{tags}</p>
              </div>
              <CountLoop target={Number(score)} suffix="%" className="font-display text-4xl font-bold text-orange" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ColumbusLoop({ inverted = false }: { inverted?: boolean }) {
  const jobs = [
    ["Canva", "Frontend Engineer", "92% match"],
    ["Atlassian", "Graduate SWE", "88% match"],
    ["SafetyCulture", "Product Analyst", "84% match"],
  ];

  return (
    <div className={`mx-auto max-w-xl rounded-2xl border ${inverted ? "border-[#EDE8E3] bg-[#FDF8F4]" : "border-white/10 bg-[#031108]"} p-5`}>
      <p className={`mb-6 font-mono text-xs ${inverted ? "text-ink/50" : "text-white/45"}`}>columbus://discover</p>
      <div className="space-y-3">
        {jobs.map(([company, role, match], index) => (
          <motion.div
            key={company}
            className={`flex items-center justify-between gap-5 rounded-2xl border p-4 ${inverted ? "border-border bg-white" : "border-white/10 bg-white/8"}`}
            animate={{ opacity: [0, 1, 1, 0], x: [80, 0, 0, -25] }}
            transition={{ repeat: Infinity, duration: 3.8, delay: index * 0.26 }}
          >
            <div>
              <p className={`font-display text-2xl font-semibold ${inverted ? "text-ink" : "text-white"}`}>{company}</p>
              <p className={`font-body text-sm font-light ${inverted ? "text-ink/50" : "text-white/50"}`}>{role}</p>
            </div>
            <span className="rounded-full bg-green px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-white">{match}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CountLoop({ target, suffix, className }: { target: number; suffix: string; className: string }) {
  return <motion.span className={className}>{target}{suffix}</motion.span>;
}

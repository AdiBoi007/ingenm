"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  AristotleLoop,
  ColumbusLoop,
  CTAButton,
  HeroWords,
  ProductFrame,
  SectionLabel,
  SherlockLoop,
  SplitHeadline,
  useEditorialAnimations,
} from "@/components/Editorial";

const features = [
  {
    title: "One URL. Every signal.",
    desc: "LinkedIn or GitHub — Sherlock finds everything publicly available and cross-references it against your role.",
  },
  {
    title: "Instant verdict.",
    desc: "Fit score, verified skills, and flagged inconsistencies — delivered before you open a single calendar.",
  },
  {
    title: "Proof, not promises.",
    desc: "Every claim is linked to a verifiable source. No more taking resumes at face value.",
  },
];

const stats = [
  { num: 4, suffix: " min", label: "Average time to shortlist" },
  { num: 94, suffix: "%", label: "Match accuracy rate" },
  { num: 0, suffix: " cold calls", label: "Wasted on unfit candidates" },
];

export default function RecruitersPage() {
  const pageRef = useRef<HTMLElement>(null);
  useEditorialAnimations(pageRef);

  return (
    <PageTransition>
      <main ref={pageRef} className="bg-bg text-ink">
        <Navbar />

        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-8 inline-flex rounded-full border border-orange/20 bg-orange/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-orange"
              >
                For Recruiters
              </motion.p>

              <HeroWords
                lines={[
                  { text: "You" },
                  { text: "don't need" },
                  { text: "more applicants." },
                  { text: "You need Sherlock.", className: "text-orange" },
                ]}
              />

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="mt-8 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]"
              >
                Drop a candidate&apos;s LinkedIn or GitHub. Sherlock scans the
                web, verifies their work, and scores their fit against your role —
                before you waste a single call.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="mt-10"
              >
                <CTAButton href="#sherlock">Run Sherlock Free</CTAButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 36 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductFrame tone="sherlock">
                <SherlockLoop />
              </ProductFrame>
            </motion.div>
          </div>
        </section>

        <section id="sherlock" className="gsap-section px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="sherlock">
              <SherlockLoop />
            </ProductFrame>

            <div>
              <SectionLabel>[01] SHERLOCK</SectionLabel>
              <SplitHeadline>Sherlock. One URL. Every signal. Instant verdict.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
                Paste a LinkedIn or GitHub URL. Sherlock crawls every public
                signal — commits, projects, endorsements, activity patterns —
                and maps them against your job description in real time.
              </p>
              <div className="mt-9">
                <CTAButton href="#stats">See the proof</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="gsap-section px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="aristotle">
              <AristotleLoop />
            </ProductFrame>

            <div>
              <SectionLabel>[02] ARISTOTLE</SectionLabel>
              <SplitHeadline>Let Aristotle handle the shortlist.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
                Post your role. Aristotle surfaces pre-verified students matched to
                your exact requirements. No noise.
              </p>
              <div className="mt-9">
                <CTAButton href="#stats">Build my shortlist</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="gsap-section bg-[#111111] px-6 py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="dark">
              <SherlockLoop inverted />
            </ProductFrame>

            <div>
              <SectionLabel dark>[03] VERIFIED PROOF</SectionLabel>
              <SplitHeadline dark>Proof, not promises.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#999]">
                Every claim is linked to a verifiable source. No more taking resumes at face value.
              </p>
              <div className="mt-10 grid gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="feature-card border-t border-white/10 py-5">
                    <h3 className="font-display text-2xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 font-body text-sm font-light leading-relaxed text-white/50">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="gsap-section px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>[04] HIRING SIGNAL</SectionLabel>
            <SplitHeadline>Start hiring smarter.</SplitHeadline>
            <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
              No more resume roulette. Get proof, not promises.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card rounded-2xl border border-[#EDE8E3] bg-white p-9 md:p-12">
                  <p
                    data-count={stat.num}
                    data-suffix={stat.suffix}
                    className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-none text-ink"
                  >
                    0{stat.suffix}
                  </p>
                  <p className="stat-label mt-6 font-mono text-xs uppercase tracking-widest text-[#999]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gsap-section px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="columbus">
              <ColumbusLoop />
            </ProductFrame>

            <div>
              <SectionLabel>[05] COLUMBUS</SectionLabel>
              <SplitHeadline>Know who fits before the first call.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
                Columbus discovers roles and fit patterns across the market, so the platform learns what great student talent actually maps to.
              </p>
              <div className="mt-9">
                <CTAButton href="#">Get Started Free</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}

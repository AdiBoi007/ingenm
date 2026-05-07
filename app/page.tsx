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
  ProductFrame,
  SectionLabel,
  SherlockLoop,
  SplitHeadline,
  useEditorialAnimations,
} from "@/components/Editorial";

const agents = [
  {
    label: "[01] ARISTOTLE",
    name: "Aristotle",
    tag: "The Matcher",
    desc: "Aligns talent to opportunity with precision. Works for both recruiters and students.",
  },
  {
    label: "[02] SHERLOCK",
    name: "Sherlock",
    tag: "The Investigator",
    desc: "Drop a LinkedIn or GitHub. Sherlock verifies everything and delivers a fit verdict.",
  },
  {
    label: "[03] COLUMBUS",
    name: "Columbus",
    tag: "The Explorer",
    desc: "Discovers roles you didn't know existed, tailored to exactly what you've built.",
  },
];

const steps = [
  {
    num: "01",
    title: "Drop a LinkedIn or GitHub URL",
    desc: "Paste any public profile link into Sherlock.",
  },
  {
    num: "02",
    title: "Sherlock does the research",
    desc: "Scans every public signal, verifies claims against your job description.",
  },
  {
    num: "03",
    title: "Verified fit score + proof",
    desc: "You get a clear verdict — fit or no fit — backed by evidence.",
  },
];

export default function HomePage() {
  const pageRef = useRef<HTMLElement>(null);
  useEditorialAnimations(pageRef);

  return (
    <PageTransition>
      <main ref={pageRef} className="bg-bg text-ink">
        <Navbar />

        <section className="relative flex min-h-screen items-center px-6 pb-24 pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 inline-flex rounded-full border border-border bg-white/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#777]"
              >
                University of Sydney · Research-grade
              </motion.p>
              <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.95] tracking-tight text-ink">
                Hiring is broken.
                <span className="block text-orange">We have receipts.</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]"
              >
                Research-grade intelligence backed by real researchers at the
                University of Sydney. Know who&apos;s real before you waste a
                single call.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <CTAButton href="/recruiters">I&apos;m a Recruiter</CTAButton>
                <CTAButton href="/students" green>I&apos;m a Student</CTAButton>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 36 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              <ProductFrame tone="sherlock">
                <SherlockLoop />
              </ProductFrame>
            </motion.div>
          </div>
        </section>

        <section className="gsap-section px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>[01] INTELLIGENCE LAYER</SectionLabel>
            <SplitHeadline>Three minds. One platform.</SplitHeadline>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {agents.map((agent) => (
                <div key={agent.name} className="feature-card rounded-2xl border border-[#EDE8E3] bg-white p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#999]">{agent.label}</p>
                  <h3 className="mt-8 font-display text-4xl font-bold text-ink">{agent.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-orange">{agent.tag}</p>
                  <p className="mt-6 font-body text-sm font-light leading-relaxed text-[#666666]">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gsap-section px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="aristotle">
              <AristotleLoop />
            </ProductFrame>
            <div>
              <SectionLabel>[02] RECRUITER FLOW</SectionLabel>
              <SplitHeadline>From link to decision in under 60 seconds.</SplitHeadline>
              <div className="section-copy mt-10 grid gap-4">
                {steps.map((step) => (
                  <div key={step.num} className="feature-card border-t border-[#EDE8E3] py-5">
                    <p className="font-mono text-xs text-orange">{step.num}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 font-body text-sm font-light text-[#666666]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="gsap-section bg-[#111111] px-6 py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="dark">
              <ColumbusLoop inverted />
            </ProductFrame>
            <div>
              <SectionLabel dark>[03] UNIVERSITY OF SYDNEY</SectionLabel>
              <SplitHeadline dark>Research-grade intelligence. Not a buzzword.</SplitHeadline>
              <p className="section-copy mt-7 max-w-2xl font-body text-xl font-light leading-relaxed text-[#999]">
                iNGEN is built on research developed alongside academics at the
                University of Sydney. Every match, every verification, backed by
                real methodology.
              </p>
            </div>
          </div>
        </section>

        <section className="gsap-section px-6 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>[04] GET STARTED</SectionLabel>
            <SplitHeadline>Ready to hire without the noise?</SplitHeadline>
            <p className="section-copy mx-auto mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
              Join recruiters and students who have already left the noise
              behind.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/recruiters">Start as Recruiter</CTAButton>
              <CTAButton href="/students" green>Join as Student</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}

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

const badges = [
  { label: "GitHub verified" },
  { label: "Project linked" },
  { label: "University confirmed" },
];

export default function StudentsPage() {
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
                className="mb-8 inline-flex rounded-full border border-green/20 bg-green/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-green"
              >
                For Students
              </motion.p>
              <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.95] tracking-tight text-ink">
                Stop applying
                <span className="block text-green">into the void.</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]"
              >
                Columbus finds roles built for you. Aristotle makes sure the
                right companies actually see you. No more spray and pray.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10"
              >
                <CTAButton href="#columbus" green>Find My Match</CTAButton>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 36 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              <ProductFrame tone="columbus">
                <ColumbusLoop />
              </ProductFrame>
            </motion.div>
          </div>
        </section>

        <section id="columbus" className="gsap-section px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="columbus">
              <ColumbusLoop />
            </ProductFrame>
            <div>
              <SectionLabel>[01] COLUMBUS</SectionLabel>
              <SplitHeadline>Your next opportunity is already out there.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
                Columbus discovers it, filters it, and surfaces only what
                actually fits your profile. No more doomscrolling job boards.
                No more applying blind.
              </p>
              <div className="mt-9">
                <CTAButton href="#proof" green>Find my match</CTAButton>
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
              <SplitHeadline>Aristotle puts you in front of the right recruiters.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
                Build your proof profile. Aristotle matches you to companies
                actively looking for exactly what you&apos;ve built. No cover
                letters. Just evidence.
              </p>
            </div>
          </div>
        </section>

        <section id="proof" className="gsap-section bg-[#111111] px-6 py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55fr_45fr]">
            <ProductFrame tone="dark">
              <SherlockLoop inverted />
            </ProductFrame>
            <div>
              <SectionLabel dark>[03] PROOF PROFILE</SectionLabel>
              <SplitHeadline dark>Your work is your resume.</SplitHeadline>
              <p className="section-copy mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#999]">
                Connect GitHub, add projects, link your university. iNGEN builds
                your proof profile automatically.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {badges.map((badge) => (
                  <div key={badge.label} className="feature-card rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-green text-sm text-white">✓</div>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/70">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="gsap-section px-6 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>[04] GET DISCOVERED</SectionLabel>
            <SplitHeadline>Ready to get discovered?</SplitHeadline>
            <p className="section-copy mx-auto mt-7 max-w-xl font-body text-xl font-light leading-relaxed text-[#666666]">
              Join thousands of students who stopped applying blind.
            </p>
            <div className="mt-10">
              <CTAButton href="#" green>Join iNGEN Free</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}

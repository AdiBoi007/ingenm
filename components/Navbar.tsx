"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AnnouncementBar } from "@/components/Editorial";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-frosted shadow-sm" : "bg-transparent"
      }`}
    >
      <AnnouncementBar />
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange group-hover:rotate-12 transition-transform duration-300">
            <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span
            className="text-xl font-display font-semibold text-ink tracking-tight"
          >
            iNGEN
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-sm border border-border rounded-full px-2 py-1.5">
          <NavLink href="/recruiters" active={pathname === "/recruiters"}>For Recruiters</NavLink>
          <NavLink href="/students" active={pathname === "/students"}>For Students</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/recruiters"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-orange text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 hover:bg-orange/90 transition duration-300 shadow-sm shadow-orange/30"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-border/50 transition-colors"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-frosted border-t border-border px-6 py-4 flex flex-col gap-3"
          >
            <Link href="/recruiters" onClick={() => setMenuOpen(false)} className="font-body font-medium text-ink hover:text-orange transition-colors">For Recruiters</Link>
            <Link href="/students" onClick={() => setMenuOpen(false)} className="font-body font-medium text-ink hover:text-orange transition-colors">For Students</Link>
            <a href="/recruiters" className="bg-orange text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full text-center mt-2 transition duration-300 hover:scale-105">Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`font-body font-medium text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
        active
          ? "bg-orange text-white"
          : "text-ink hover:bg-border/60 hover:text-orange"
      }`}
    >
      {children}
    </Link>
  );
}

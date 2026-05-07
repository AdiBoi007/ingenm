"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange">
            <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span className="font-display font-semibold text-ink text-lg">iNGEN</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/recruiters" className="font-body text-sm text-muted hover:text-orange transition-colors">For Recruiters</Link>
          <Link href="/students" className="font-body text-sm text-muted hover:text-green transition-colors">For Students</Link>
        </div>

        <p className="font-mono text-xs text-muted">
          © 2025 iNGEN · University of Sydney
        </p>
      </div>
    </footer>
  );
}

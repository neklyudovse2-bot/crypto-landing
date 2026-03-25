"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#1A1A2E]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-lg font-medium tracking-tight">
          <span className="text-[#00E5FF]">clario</span>
          <span className="text-white">track</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#8892A0] hover:text-white transition-colors">
            Features
          </a>
          <a href="#why" className="text-sm text-[#8892A0] hover:text-white transition-colors">
            Why Us
          </a>
          <a href="#download" className="text-sm text-[#8892A0] hover:text-white transition-colors">
            Download
          </a>
          <a
            href="#download"
            className="text-sm px-4 py-2 border border-[#00E5FF]/40 text-[#00E5FF] rounded-lg hover:bg-[#00E5FF]/10 transition-all"
          >
            Download
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#8892A0] p-2"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1A1A2E]/50 bg-[#0A0A0F]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm text-[#8892A0] hover:text-white" onClick={() => setMobileOpen(false)}>
              Features
            </a>
            <a href="#why" className="text-sm text-[#8892A0] hover:text-white" onClick={() => setMobileOpen(false)}>
              Why Us
            </a>
            <a href="#download" className="text-sm text-[#8892A0] hover:text-white" onClick={() => setMobileOpen(false)}>
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

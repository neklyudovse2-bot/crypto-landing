"use client";

import { motion } from "framer-motion";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28 relative">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.12)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.08)_0%,_transparent_65%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-16 lg:px-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Start tracking{" "}
            <span className="text-[#00E5FF]">today</span>
          </h2>
          <p className="text-[#8892A0] text-lg md:text-xl max-w-lg mx-auto mb-10">
            Download Clario Track and never lose track of your trades again.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com/kz/app/asset-journal-tracker/id6759189847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#12121A] border border-[#1A1A2E] text-white font-medium text-sm rounded-lg hover:border-[#8892A0]/30 transition-all hover:shadow-lg group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-[#8892A0] leading-none">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#12121A] border border-[#1A1A2E] text-white font-medium text-sm rounded-lg hover:border-[#8892A0]/30 transition-all hover:shadow-lg group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626L15.206 12l2.492-2.493zM5.864 2.658L16.8 9.006l-2.302 2.293-8.634-8.641z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-[#8892A0] leading-none">Get it on</div>
                <div className="text-base font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

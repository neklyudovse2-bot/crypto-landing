"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

function PhoneMockup() {
  return (
    <div className="relative w-[260px] md:w-[280px] mx-auto lg:mx-0">
      {/* Phone frame */}
      <div className="bg-[#12121A] rounded-[20px] border border-[#1A1A2E] p-3 shadow-2xl shadow-[#00E5FF]/5">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 py-2 mb-2">
          <span className="text-[10px] text-[#8892A0]">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-2 rounded-sm bg-[#8892A0]/30" />
            <div className="w-3 h-2 rounded-sm bg-[#8892A0]/30" />
            <div className="w-5 h-2 rounded-sm bg-[#8892A0]/30" />
          </div>
        </div>

        {/* Screen 1 - Portfolio */}
        <div className="bg-[#0A0A0F] rounded-xl p-4 mb-3">
          <div className="text-[10px] text-[#8892A0] mb-1">Portfolio Value</div>
          <div className="font-mono text-xl text-white font-medium">$12,483.50</div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[10px] text-[#00C853]">+18.3%</span>
            <span className="text-[10px] text-[#8892A0]">today</span>
          </div>
          <div className="mt-3 h-8 flex items-end gap-[3px]">
            {[40, 55, 35, 60, 45, 70, 50, 80, 65, 75, 90, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-[#00E5FF]/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Screen 2 - Recent trades */}
        <div className="bg-[#0A0A0F] rounded-xl p-4 space-y-2">
          {[
            { coin: "BTC", type: "Buy", amount: "0.05", color: "#00E5FF" },
            { coin: "ETH", type: "Sell", amount: "2.1", color: "#00C853" },
            { coin: "SOL", type: "Buy", amount: "45", color: "#00E5FF" },
          ].map((trade, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: `${trade.color}20` }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-[8px]"
                    style={{ color: trade.color }}
                  >
                    {trade.coin[0]}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-white">{trade.coin}</div>
                  <div className="text-[8px] text-[#8892A0]">{trade.type}</div>
                </div>
              </div>
              <span className="font-mono text-[10px]" style={{ color: trade.color }}>
                {trade.type === "Sell" ? "+" : "−"}{trade.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Glow behind phone */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] rounded-full bg-[#00E5FF]/8 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-block px-3 py-1 bg-[#00E5FF]/15 text-[#00E5FF] text-xs font-medium tracking-widest rounded-full border border-[#00E5FF]/20 mb-6">
                CRYPTO PORTFOLIO TRACKER
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Your trades. Your data.{" "}
              <span className="text-[#00E5FF]">Your rules.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#8892A0] text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              A private crypto journal for traders who want to stay organized — no accounts, no cloud, no noise.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00E5FF] text-[#0A0A0F] font-semibold text-sm rounded-lg hover:bg-[#00E5FF]/90 transition-all hover:shadow-lg hover:shadow-[#00E5FF]/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download iOS
              </a>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00E5FF] text-[#0A0A0F] font-semibold text-sm rounded-lg hover:bg-[#00E5FF]/90 transition-all hover:shadow-lg hover:shadow-[#00E5FF]/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626L15.206 12l2.492-2.493zM5.864 2.658L16.8 9.006l-2.302 2.293-8.634-8.641z" />
                </svg>
                Download Android
              </a>
            </motion.div>
          </div>

          {/* Right phone mockup */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

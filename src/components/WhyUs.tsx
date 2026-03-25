"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "100% Private",
    desc: "All data stays on your device. No servers, no cloud sync, no tracking.",
  },
  {
    title: "Lightning Fast",
    desc: "Instant launch. No loading, no waiting for balances to sync.",
  },
  {
    title: "Free Forever",
    desc: "No hidden fees. No premium tiers. Just a clean tool.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why <span className="text-[#00E5FF]">Clario Track</span>
          </h2>
          <p className="text-[#8892A0] text-lg max-w-xl mx-auto">
            Built for traders who value simplicity and privacy.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`text-center px-6 md:px-10 ${
                i < 2
                  ? "md:border-r md:border-[#1A1A2E]"
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
              <p className="text-[#8892A0] text-sm leading-relaxed max-w-xs mx-auto">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

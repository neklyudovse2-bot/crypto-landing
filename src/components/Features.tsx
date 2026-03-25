"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📊",
    title: "Log Trades",
    desc: "Record every buy and sell. Set your entry price, quantity, and date.",
  },
  {
    icon: "📈",
    title: "Live Prices",
    desc: "Track real-time prices for 100+ cryptocurrencies.",
  },
  {
    icon: "🔄",
    title: "Convert Instantly",
    desc: "Quick crypto-to-fiat and crypto-to-crypto converter.",
  },
  {
    icon: "💰",
    title: "Track P&L",
    desc: "See your portfolio performance at a glance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00E5FF]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="text-[#00E5FF]">stay sharp</span>
          </h2>
          <p className="text-[#8892A0] text-lg max-w-xl mx-auto">
            Four core tools. No bloat. Just what traders actually use.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-[#12121A] border border-[#1A1A2E] rounded-xl p-6 md:p-8 hover:border-[#00E5FF]/20 transition-colors group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-[#8892A0] text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

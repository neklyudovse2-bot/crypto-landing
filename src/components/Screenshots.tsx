"use client";

const screens = [
  {
    label: "Portfolio",
    content: (
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-[#8892A0]">Total Balance</div>
        <div className="font-mono text-xl text-white">$12,483.50</div>
        <div className="text-[10px] text-[#00C853]">+18.3% this month</div>
        <div className="mt-4 space-y-2">
          {["BTC 42%", "ETH 28%", "SOL 18%", "Other 12%"].map((item, j) => (
            <div key={j} className="flex items-center justify-between">
              <span className="text-[10px] text-[#8892A0]">{item.split(" ")[0]}</span>
              <div className="flex-1 mx-2 h-1.5 bg-[#1A1A2E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00E5FF]/60 rounded-full"
                  style={{ width: item.split(" ")[1] }}
                />
              </div>
              <span className="font-mono text-[10px] text-white">{item.split(" ")[1]}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Trades",
    content: (
      <div className="p-4 space-y-2">
        <div className="text-[10px] text-[#8892A0] mb-2">Recent Trades</div>
        {[
          { coin: "BTC", type: "Buy", price: "$67,420", time: "2h ago" },
          { coin: "ETH", type: "Sell", price: "$3,891", time: "5h ago" },
          { coin: "SOL", type: "Buy", price: "$178.20", time: "1d ago" },
          { coin: "AVAX", type: "Buy", price: "$42.15", time: "2d ago" },
        ].map((t, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#1A1A2E]/50">
            <div>
              <div className="text-[11px] text-white">{t.coin}</div>
              <div className="text-[8px] text-[#8892A0]">{t.time}</div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] text-white">{t.price}</div>
              <div className={`text-[8px] ${t.type === "Buy" ? "text-[#00E5FF]" : "text-[#00C853]"}`}>
                {t.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Prices",
    content: (
      <div className="p-4 space-y-2">
        <div className="text-[10px] text-[#8892A0] mb-2">Live Prices</div>
        {[
          { coin: "BTC", price: "$67,420", change: "+2.4%" },
          { coin: "ETH", price: "$3,891", change: "+1.8%" },
          { coin: "SOL", price: "$178.20", change: "-0.5%" },
          { coin: "DOGE", price: "$0.142", change: "+5.2%" },
        ].map((p, i) => (
          <div key={i} className="flex items-center justify-between py-1.5">
            <span className="text-[11px] text-white">{p.coin}</span>
            <span className="font-mono text-[10px] text-white">{p.price}</span>
            <span className={`font-mono text-[10px] ${p.change.startsWith("+") ? "text-[#00C853]" : "text-red-400"}`}>
              {p.change}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Converter",
    content: (
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-[#8892A0]">Convert</div>
        <div className="bg-[#0A0A0F] rounded-lg p-3">
          <div className="text-[10px] text-[#8892A0]">From</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-white text-sm">1.0</span>
            <span className="text-[10px] text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-0.5 rounded">BTC</span>
          </div>
        </div>
        <div className="flex justify-center text-[#8892A0]">⇅</div>
        <div className="bg-[#0A0A0F] rounded-lg p-3">
          <div className="text-[10px] text-[#8892A0]">To</div>
          <div className="flex items-center justify-between mt-1">
            <span className="font-mono text-white text-sm">67,420.00</span>
            <span className="text-[10px] text-[#8892A0] bg-[#1A1A2E] px-2 py-0.5 rounded">USD</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Settings",
    content: (
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-[#8892A0] mb-2">Settings</div>
        {["Currency: USD", "Theme: Dark", "Notifications: On", "Default Chart: 7D"].map((s, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-[#1A1A2E]/50">
            <span className="text-[10px] text-white">{s.split(": ")[0]}</span>
            <span className="font-mono text-[10px] text-[#00E5FF]">{s.split(": ")[1]}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Analytics",
    content: (
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-[#8892A0]">Performance</div>
        <div className="font-mono text-lg text-white">+23.7%</div>
        <div className="text-[10px] text-[#00C853]">All-time return</div>
        <div className="mt-3 h-16 flex items-end gap-[2px]">
          {[30, 45, 38, 52, 48, 60, 55, 72, 68, 80, 75, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: h > 60 ? "#00C853" : "#00E5FF",
                opacity: 0.6,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-[#8892A0] mt-1">
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            See it in <span className="text-[#00E5FF]">action</span>
          </h2>
          <p className="text-[#8892A0] text-lg max-w-md mx-auto">
            Every screen. Every detail. Designed for traders.
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="scroll-strip flex gap-4 px-6 md:px-16 lg:px-24 pb-4">
        {/* Spacer for layout */}
        <div className="hidden lg:block flex-shrink-0 w-[calc((100%-1400px)/2)]" />
        {screens.map((screen) => (
          <div
            key={screen.label}
            className="flex-shrink-0 w-[240px] md:w-[280px]"
          >
            <div className="bg-[#12121A] border border-[#1A1A2E] rounded-2xl overflow-hidden">
              {/* Phone notch */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-16 h-1 bg-[#1A1A2E] rounded-full" />
              </div>
              {/* Screen content */}
              <div className="min-h-[240px]">{screen.content}</div>
            </div>
            <div className="text-center mt-3">
              <span className="text-xs text-[#8892A0]">{screen.label}</span>
            </div>
          </div>
        ))}
        {/* Spacer for layout */}
        <div className="hidden lg:block flex-shrink-0 w-24" />
      </div>
    </section>
  );
}

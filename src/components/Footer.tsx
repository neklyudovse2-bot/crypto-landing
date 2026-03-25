export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A2E] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-mono text-sm tracking-tight">
            <span className="text-[#00E5FF]">clario</span>
            <span className="text-white">track</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#8892A0] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#8892A0] hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-[#8892A0] hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <span className="font-mono text-xs text-[#8892A0]">
            © 2026 Clario Track
          </span>
        </div>
      </div>
    </footer>
  );
}

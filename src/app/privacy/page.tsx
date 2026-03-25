export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-6 md:px-16 lg:px-24 py-20">
        <a href="/" className="text-[#00E5FF] hover:underline text-sm mb-8 inline-block font-mono">← Back to Clario Track</a>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-[#8892A0] mb-12 text-sm font-mono">Last updated: March 25, 2026</p>

        <section className="space-y-8 text-[#8892A0] leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>This Privacy Policy describes how <strong className="text-white">Clario Track: Finance Tracking</strong> (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;) handles your information. We are committed to protecting your privacy and being transparent about our data practices.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-4"><strong className="text-white">2.1 Information You Provide</strong></p>
            <p className="mb-2">The App allows you to manually enter cryptocurrency trades, amounts, and prices. <strong className="text-white">All data you enter is stored locally on your device only</strong> and is never transmitted to our servers.</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Cryptocurrency trade records (asset name, quantity, purchase price, date)</li>
              <li>Portfolio notes and custom labels</li>
            </ul>

            <p className="mb-4"><strong className="text-white">2.2 Information Collected Automatically</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong className="text-white">Device information:</strong> Operating system version, device model (for crash reporting only)</li>
              <li><strong className="text-white">App usage analytics:</strong> Anonymous usage events (e.g., feature usage frequency) — no personal data is included</li>
            </ul>

            <p className="mb-2"><strong className="text-white">2.3 Information We Do NOT Collect</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We do <strong className="text-white">not</strong> collect your name, email, or any contact information</li>
              <li>We do <strong className="text-white">not</strong> require account registration</li>
              <li>We do <strong className="text-white">not</strong> access your crypto wallets or exchange accounts</li>
              <li>We do <strong className="text-white">not</strong> store your financial data on our servers</li>
              <li>We do <strong className="text-white">not</strong> sell or share your data with third parties for advertising</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>Any minimal technical data collected is used solely to fix bugs and improve app stability. We do not use your data for advertising, profiling, or any commercial purposes beyond improving the App.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>The App uses public cryptocurrency price APIs (e.g., CoinGecko, CryptoCompare) to fetch live market prices. Your device makes anonymous requests to these services. No personal data is sent. These services have their own privacy policies, which we encourage you to review.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All trade records and portfolio data are stored <strong className="text-white">locally on your device</strong></li>
              <li>We use standard platform security (iOS Keychain / Android Keystore) where applicable</li>
              <li>We do not operate servers that store your financial data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention and Deletion</h2>
            <p>Since all data is stored locally on your device, you can delete all App data at any time by clearing the App&apos;s data in your device Settings or by uninstalling the App. We do not retain any personal data on our servers.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>The App is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the &quot;Last updated&quot; date at the top of this policy. Continued use of the App after changes constitutes acceptance of the revised policy.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Your Rights</h2>
            <p>Depending on your location, you may have rights under applicable privacy laws (such as GDPR or CCPA), including the right to access information we hold about you, the right to request deletion of your data, and the right to object to data processing. Since we collect minimal data and store nothing personally identifiable on our servers, most requests can be fulfilled by clearing the App data on your device.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <p className="mt-2 text-white font-mono">support@clariotrack.app</p>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-[#1A1A2E]">
          <p className="text-[#8892A0] text-sm font-mono">© 2026 Clario Track</p>
        </div>
      </div>
    </div>
  );
}

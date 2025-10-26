import LegalLayout from "@/components/LegalLayout";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <LegalLayout>
      <Card className="p-8 md:p-12 shadow-peaceful">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-teal-text mb-2 font-serif">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">Introduction</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Welcome to Rhema, a Scripture memorization and meditation application operated by <strong>Agape Labs Ltd</strong> ("we," "our," or "us"). We are committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
            <p className="text-foreground leading-relaxed">
              This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our mobile application and related services (collectively, the "Service").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">1. Data Controller</h2>
            <p className="text-foreground leading-relaxed mb-2">
              The data controller responsible for your personal data is:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground mb-1"><strong>Agape Labs Ltd</strong></p>
              <p className="text-foreground mb-1">2 Gas Street</p>
              <p className="text-foreground mb-1">Coventry, CV4FG</p>
              <p className="text-foreground mb-1">United Kingdom</p>
              <p className="text-foreground mb-1">Email: <a href="mailto:team@agapelabs.co.uk" className="text-teal-accent hover:underline">team@agapelabs.co.uk</a></p>
              <p className="text-foreground">Phone: +44 07701073329</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information You Provide</h3>
            <p className="text-foreground leading-relaxed mb-2">When you create an account with Rhema, we collect:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Email address</strong> - Used for account creation, authentication, and communication</li>
              <li><strong>First name</strong> - Used to personalize your experience</li>
              <li><strong>Last name</strong> - Used to personalize your experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Authentication Information</h3>
            <p className="text-foreground leading-relaxed mb-2">We support multiple authentication methods:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Google Sign-In</strong> - When you authenticate via Google, we receive your name and email address from your Google account</li>
              <li><strong>Apple Sign-In</strong> - When you authenticate via Apple, we receive your name and email address (or Apple's private relay email) from your Apple ID</li>
              <li><strong>Email/Password</strong> - Managed securely through Supabase Authentication</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.3 User-Generated Content</h3>
            <p className="text-foreground leading-relaxed mb-2">We store content you create within the app:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Custom verse lists you create</li>
              <li>Meditation sessions you configure</li>
              <li>Progress data related to your Scripture memorization</li>
              <li>Practice session history and statistics</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.4 Usage and Technical Information</h3>
            <p className="text-foreground leading-relaxed mb-2">We automatically collect certain technical information:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Device information (device type, operating system version)</li>
              <li>App usage statistics (features used, session duration)</li>
              <li>Error logs and crash reports for app stability</li>
              <li>IP address and general location (country level)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground leading-relaxed mb-2">We use your personal data for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Service Provision</strong> - To provide, maintain, and improve the Rhema app functionality</li>
              <li><strong>Authentication</strong> - To create and manage your account securely</li>
              <li><strong>Personalization</strong> - To customize your experience and track your progress</li>
              <li><strong>Communication</strong> - To send important service updates, security alerts, and support messages</li>
              <li><strong>Analytics</strong> - To understand how users interact with our app and improve features</li>
              <li><strong>Security</strong> - To detect, prevent, and address technical issues, fraud, and abuse</li>
              <li><strong>Legal Compliance</strong> - To comply with applicable laws and regulations</li>
              <li><strong>Future Subscription Management</strong> - To manage billing and subscriptions when we transition from beta to paid model</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-foreground leading-relaxed mb-2">We process your personal data under the following legal bases:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Contractual Necessity</strong> - Processing is necessary to perform our contract with you (providing the Service)</li>
              <li><strong>Legitimate Interests</strong> - We have legitimate interests in improving our Service, preventing fraud, and ensuring security</li>
              <li><strong>Consent</strong> - Where required, we obtain your explicit consent (e.g., for marketing communications)</li>
              <li><strong>Legal Obligation</strong> - To comply with legal requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">5. Data Storage and Security</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Your data is stored securely using <strong>Supabase</strong>, a secure cloud database platform. We implement industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure backup procedures</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              While we take reasonable measures to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">6. Data Sharing and Third Parties</h2>
            <p className="text-foreground leading-relaxed mb-2">We may share your data with:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Service Providers</strong> - Supabase (database and authentication), Google (OAuth), Apple (Sign-In)</li>
              <li><strong>Legal Requirements</strong> - When required by law, court order, or governmental authority</li>
              <li><strong>Business Transfers</strong> - In connection with a merger, acquisition, or sale of assets (with notice to you)</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              We do <strong>not</strong> sell your personal data to third parties. We do <strong>not</strong> share your data for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">7. International Data Transfers</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Your data may be transferred to and processed in countries outside the UK/EEA where our service providers operate. When we transfer data internationally, we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions for countries with equivalent data protection</li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">8. Data Retention</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Account Data</strong> - Retained while your account is active and for up to 90 days after account deletion</li>
              <li><strong>Usage Data</strong> - Typically retained for up to 2 years for analytics purposes</li>
              <li><strong>Legal Requirements</strong> - Some data may be retained longer if required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">9. Your Rights Under GDPR</h2>
            <p className="text-foreground leading-relaxed mb-4">
              As a data subject under GDPR, you have the following rights:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Right of Access</h4>
                <p className="text-foreground leading-relaxed">Request a copy of the personal data we hold about you.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Rectification</h4>
                <p className="text-foreground leading-relaxed">Request correction of inaccurate or incomplete data.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Erasure ("Right to be Forgotten")</h4>
                <p className="text-foreground leading-relaxed">Request deletion of your personal data under certain circumstances.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Restriction of Processing</h4>
                <p className="text-foreground leading-relaxed">Request that we limit how we use your data.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Data Portability</h4>
                <p className="text-foreground leading-relaxed">Receive your data in a structured, commonly used format and transmit it to another controller.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Object</h4>
                <p className="text-foreground leading-relaxed">Object to processing based on legitimate interests or for direct marketing purposes.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Withdraw Consent</h4>
                <p className="text-foreground leading-relaxed">Withdraw consent at any time where processing is based on consent.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Right to Lodge a Complaint</h4>
                <p className="text-foreground leading-relaxed">File a complaint with your local data protection authority (UK: Information Commissioner's Office).</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:team@agapelabs.co.uk" className="text-teal-accent hover:underline">team@agapelabs.co.uk</a>. We will respond to your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">10. Cookies and Tracking</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Our mobile app does not use cookies in the traditional web sense. However, we may use similar technologies such as:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Local storage for app preferences and session management</li>
              <li>Analytics tools to understand app usage patterns</li>
              <li>Authentication tokens to maintain your logged-in session</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              You can control some of these through your device settings, though disabling certain features may limit app functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">11. Children's Privacy</h2>
            <p className="text-foreground leading-relaxed">
              Rhema does not have age restrictions and may be used by individuals of all ages. However, we do not knowingly collect personal information from children under 13 (or applicable age in your jurisdiction) without parental consent. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">12. Beta Service and Future Subscription Model</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Rhema is currently in <strong>beta testing</strong> and is provided free of charge. We plan to transition to a subscription-based model for full release. When this occurs:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>We will notify you in advance of any changes to pricing</li>
              <li>Beta users may receive special pricing or grandfathered terms</li>
              <li>We may collect payment information through secure third-party payment processors</li>
              <li>Additional terms related to billing and subscriptions will apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Posting the updated policy with a new "Last Updated" date</li>
              <li>Sending you an email notification (for significant changes)</li>
              <li>Displaying an in-app notification</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Your continued use of the Service after changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">14. Contact Us</h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground mb-1"><strong>Email:</strong> <a href="mailto:team@agapelabs.co.uk" className="text-teal-accent hover:underline">team@agapelabs.co.uk</a></p>
              <p className="text-foreground mb-1"><strong>Phone:</strong> +44 07701073329</p>
              <p className="text-foreground mb-1"><strong>Mail:</strong></p>
              <p className="text-foreground mb-1">Agape Labs Ltd</p>
              <p className="text-foreground mb-1">2 Gas Street</p>
              <p className="text-foreground">Coventry, CV4FG, United Kingdom</p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">15. Supervisory Authority</h2>
            <p className="text-foreground leading-relaxed mb-2">
              If you are located in the UK or EEA and have concerns about our data practices, you have the right to lodge a complaint with your local supervisory authority:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground mb-1"><strong>UK Information Commissioner's Office (ICO)</strong></p>
              <p className="text-foreground mb-1">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-accent hover:underline">https://ico.org.uk</a></p>
              <p className="text-foreground">Phone: 0303 123 1113</p>
            </div>
          </section>
        </div>
      </Card>
    </LegalLayout>
  );
};

export default Privacy;

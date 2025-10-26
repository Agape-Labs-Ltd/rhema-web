import LegalLayout from "@/components/LegalLayout";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <LegalLayout>
      <Card className="p-8 md:p-12 shadow-peaceful">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-teal-text mb-2 font-serif">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground leading-relaxed mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you and <strong>Agape Labs Ltd</strong> ("Company," "we," "us," or "our") regarding your access to and use of the Rhema mobile application and related services (collectively, the "Service").
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Service.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Age Requirement:</strong> While there is no minimum age requirement to use Rhema, users under the age of 18 should use the Service with parental guidance and consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">2. Description of Service</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Rhema is a Scripture memorization and meditation application designed to help users:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Memorize Bible verses through progressive learning and spaced repetition</li>
              <li>Create custom verse lists for personalized study</li>
              <li>Engage in guided meditation sessions with Scripture</li>
              <li>Track progress and maintain daily spiritual growth goals</li>
              <li>Build consistent habits of Scripture engagement</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">3. Beta Service and Subscription Terms</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Current Beta Status</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Rhema is currently in <strong>beta testing</strong> and is provided to you free of charge. As a beta service:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>The Service may contain bugs, errors, or incomplete features</li>
              <li>Features and functionality may change without notice</li>
              <li>We may request feedback to improve the Service</li>
              <li>Service availability is not guaranteed</li>
              <li>You accept the risks associated with using pre-release software</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Future Subscription Model</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Upon full release, Rhema will transition to a subscription-based pricing model. When this occurs:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>We will provide advance notice of at least 30 days before implementing charges</li>
              <li>Beta users may receive special pricing, discounts, or grandfathered terms</li>
              <li>You will have the option to subscribe or discontinue use without charge</li>
              <li>Subscription terms, pricing, and billing information will be clearly communicated</li>
              <li>Payment processing will be handled through secure third-party providers (Apple App Store, Google Play Store)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Future Subscription Management</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Once subscription-based pricing is implemented:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Subscriptions will automatically renew unless cancelled before the renewal date</li>
              <li>You may cancel your subscription at any time through your account settings or app store</li>
              <li>Refunds will be handled according to the policies of the relevant app store</li>
              <li>We reserve the right to modify subscription pricing with advance notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">4. User Accounts</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Account Creation</h3>
            <p className="text-foreground leading-relaxed mb-4">
              To use the Service, you must create an account. You may register using:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Email address and password</li>
              <li>Google Sign-In (OAuth)</li>
              <li>Apple Sign-In</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Account Security</h3>
            <p className="text-foreground leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access or security breach</li>
              <li>Providing accurate and complete registration information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Account Termination</h3>
            <p className="text-foreground leading-relaxed">
              You may delete your account at any time through the app settings. We may suspend or terminate your account if you violate these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">5. User Content and Ownership</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Your Content</h3>
            <p className="text-foreground leading-relaxed mb-4">
              "User Content" refers to content you create within the Service, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Custom verse lists</li>
              <li>Meditation session configurations</li>
              <li>Progress data and practice history</li>
              <li>Personal notes or preferences</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              You retain ownership of your User Content. By using the Service, you grant us a limited, non-exclusive, royalty-free license to store, process, and display your User Content solely for the purpose of providing the Service to you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2 No User-Generated Public Content</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Rhema does not include features for sharing, publishing, or making your User Content publicly available to other users. Your verse lists, meditation sessions, and progress data remain private to your account.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Data Export</h3>
            <p className="text-foreground leading-relaxed">
              You may request an export of your User Content at any time by contacting us at team@agapelabs.co.uk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">6. Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Our Intellectual Property</h3>
            <p className="text-foreground leading-relaxed mb-4">
              The Service, including its software, design, text, graphics, logos, icons, images, audio clips, and other content (excluding Scripture text and User Content), is owned by Agape Labs Ltd and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Copy, modify, distribute, sell, or lease any part of the Service</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use our trademarks, logos, or branding without prior written consent</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Scripture Text</h3>
            <p className="text-foreground leading-relaxed mb-4">
              The Bible verses and Scripture content available in the Service are derived from various Bible translations and versions. Each translation may be subject to its own copyright and usage restrictions. We use Scripture text in accordance with the respective copyright holders' permissions.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bible translations used are for personal, non-commercial spiritual growth purposes. You may not extract, reproduce, or redistribute Scripture content from the Service for commercial purposes.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">6.3 License to Use</h3>
            <p className="text-foreground leading-relaxed">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">7. Acceptable Use Policy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Interfere with or disrupt the Service or servers/networks connected to the Service</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Collect or harvest information about other users without consent</li>
              <li>Use automated scripts, bots, or scrapers to access the Service</li>
              <li>Abuse, harass, threaten, or intimidate others (if future social features are added)</li>
              <li>Use the Service in any way that could damage our reputation or the reputation of Agape Labs Ltd</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">8. Third-Party Services</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Service integrates with third-party services including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li><strong>Google Sign-In</strong> - Subject to Google's Terms of Service and Privacy Policy</li>
              <li><strong>Apple Sign-In</strong> - Subject to Apple's Terms of Service and Privacy Policy</li>
              <li><strong>Supabase</strong> - Our backend infrastructure provider</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Your use of these third-party services is subject to their respective terms and privacy policies. We are not responsible for the practices or content of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">9. Disclaimers</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">9.1 "As Is" Service</h3>
            <p className="text-foreground leading-relaxed mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">9.2 No Spiritual or Medical Advice</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Rhema is a Scripture memorization and meditation tool. It is not intended to provide:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Professional spiritual counseling or theological advice</li>
              <li>Medical, mental health, or therapeutic treatment</li>
              <li>Substitution for consultation with qualified religious, medical, or mental health professionals</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Always seek the advice of qualified professionals for matters related to your spiritual, mental, or physical health.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">9.3 Scripture Accuracy</h3>
            <p className="text-foreground leading-relaxed">
              While we strive to provide accurate Scripture text, we do not guarantee the absolute accuracy, completeness, or suitability of Bible translations for your specific purposes. Users are encouraged to verify Scripture text with authoritative Bible sources.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">9.4 No Guarantee of Results</h3>
            <p className="text-foreground leading-relaxed">
              We make no guarantees regarding the spiritual, emotional, or other benefits you may derive from using the Service. Results may vary by individual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">10. Limitation of Liability</h2>
            <p className="text-foreground leading-relaxed mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, AGAPE LABS LTD, ITS DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
              <li>Damages resulting from your use or inability to use the Service</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Statements or conduct of any third party on the Service</li>
              <li>Any other matter relating to the Service</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR (B) £100.
            </p>
            <p className="text-foreground leading-relaxed">
              Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">11. Indemnification</h2>
            <p className="text-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless Agape Labs Ltd, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your User Content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">12. Termination</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">12.1 Termination by You</h3>
            <p className="text-foreground leading-relaxed mb-4">
              You may terminate your account at any time by:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Deleting your account through the app settings</li>
              <li>Contacting us at team@agapelabs.co.uk</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">12.2 Termination by Us</h3>
            <p className="text-foreground leading-relaxed mb-4">
              We may suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Breach of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Request by law enforcement or government authorities</li>
              <li>Discontinuation or material modification of the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">12.3 Effect of Termination</h3>
            <p className="text-foreground leading-relaxed">
              Upon termination, your right to use the Service will immediately cease. We will delete your account data in accordance with our Privacy Policy, typically within 90 days. Provisions of these Terms that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">13. Changes to Terms</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
              <li>Posting the updated Terms with a new "Last Updated" date</li>
              <li>Sending you an email notification</li>
              <li>Displaying an in-app notification</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you must stop using the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">14. Governing Law and Jurisdiction</h2>
            <p className="text-foreground leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>, without regard to its conflict of law provisions.
            </p>
            <p className="text-foreground leading-relaxed">
              Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales. However, we retain the right to bring legal proceedings in any jurisdiction where you reside or where a breach of these Terms occurs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">15. Dispute Resolution</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Before filing a claim, we encourage you to contact us directly at team@agapelabs.co.uk to seek a resolution. We will attempt to resolve disputes informally through good-faith negotiations.
            </p>
            <p className="text-foreground leading-relaxed">
              If informal resolution is unsuccessful, disputes may be resolved through arbitration or mediation as an alternative to litigation, subject to your agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">16. Miscellaneous</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">16.1 Entire Agreement</h3>
            <p className="text-foreground leading-relaxed mb-3">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Agape Labs Ltd regarding the Service.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">16.2 Severability</h3>
            <p className="text-foreground leading-relaxed mb-3">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">16.3 Waiver</h3>
            <p className="text-foreground leading-relaxed mb-3">
              Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">16.4 Assignment</h3>
            <p className="text-foreground leading-relaxed mb-3">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">16.5 Force Majeure</h3>
            <p className="text-foreground leading-relaxed">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold text-teal-text mb-4">17. Contact Information</h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
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

          <div className="bg-teal-light p-4 rounded-lg mt-8">
            <p className="text-foreground text-sm">
              By using Rhema, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </Card>
    </LegalLayout>
  );
};

export default Terms;

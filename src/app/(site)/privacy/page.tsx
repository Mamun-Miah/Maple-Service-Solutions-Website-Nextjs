import { SectionHeader } from "@/components/components/section-header"

export const metadata = {
  title: "Privacy Policy",
  description: "Maple Service Solution's privacy policy explaining how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <div className="section-container">
      <div className="content-max max-w-4xl">
        <SectionHeader
          badge="Legal"
          title="Privacy Policy"
          description="Your privacy is important to us. This policy explains how we handle your information."
        />

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Maple Service Solution Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information that you voluntarily provide to us, including name, email address, company name, phone number, and other contact information when you reach out to us or request services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information about your use of our website, including IP address, browser type, pages visited, time spent, and other technical data. This helps us improve our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and improve our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>With service providers who perform services on our behalf</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transaction (e.g., merger, acquisition)</li>
              <li>With your consent for specific purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies and similar technologies to improve your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-primary font-medium">hello@mapleservice.com</p>
          </section>

          <div className="glass p-6 rounded-2xl text-center">
            <p className="text-sm text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

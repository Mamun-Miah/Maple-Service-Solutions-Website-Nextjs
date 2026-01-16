import { SectionHeader } from "@/components/components/section-header"

export const metadata = {
  title: "Terms of Service",
  description: "Maple Service Solution's terms of service governing your use of our website and services.",
}

export default function TermsPage() {
  return (
    <div className="section-container">
      <div className="content-max max-w-4xl">
        <SectionHeader
          badge="Legal"
          title="Terms of Service"
          description="These terms govern your use of our website and services."
        />

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the website and services of Maple Service Solution Limited ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 16 years old to use our services. By using our services, you represent that you meet this eligibility requirement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Permitted Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may use our services for lawful purposes only. You agree not to use our services for any illegal, harmful, or unauthorized activities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing on intellectual property rights of others</li>
                  <li>Distributing malware or malicious code</li>
                  <li>Interfering with or disrupting our services</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Engaging in fraudulent or deceptive practices</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, and software, is owned by Maple Service Solution and protected by copyright and other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Your Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of any content you submit to us. By submitting content, you grant us a license to use, display, and distribute it for the purpose of providing our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services and Fees</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer various products and services, some of which may be subject to fees. All fees will be clearly disclosed before you make any purchase.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Prices are subject to change without notice</li>
              <li>Payment is required in advance unless otherwise agreed</li>
              <li>Refund policies are specified separately for each service</li>
              <li>We reserve the right to modify or discontinue services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. Please review our Privacy Policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our services are provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We do not guarantee specific results from using our services</li>
              <li>We are not responsible for third-party content or services</li>
              <li>We provide no warranties regarding accuracy or reliability of information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Maple Service Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Maple Service Solution from any claims, damages, or expenses arising from your use of our services or your violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-primary font-medium">Email: contact@mapleitfirm.com</p>
              <p className="text-muted-foreground">Address: Gulshan 1, Dhaka 1212, Bangladesh</p>
            </div>
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

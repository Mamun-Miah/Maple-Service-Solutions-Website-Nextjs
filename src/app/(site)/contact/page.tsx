"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionHeader } from "@/components/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Calendar, CheckCircle2, Send } from "lucide-react"
import { toast } from "sonner"

// export const metadata = {
//   title: "Contact",
//   description: "Get in touch with Maple Service Solution. Let's discuss your next project.",
// }

const budgetRanges = [
  "$5k - $15k",
  "$15k - $50k",
  "$50k - $100k",
  "$100k+",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast.success("Message sent successfully! We'll get back to you soon.")

    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="section-container">
      <div className="content-max">
        <SectionHeader
          badge="Get in Touch"
          align="center"
          title="Let's Build Something Great"
          description="Ready to start your project? Get in touch and let's discuss how we can help."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="focus-ring"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="focus-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="focus-ring"
                />
              </div>

              <div className="space-y-2">
                <Label>Project Budget *</Label>
                <div className="grid grid-cols-2 gap-2">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                        formData.budget === range
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your project *</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your project, goals, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="focus-ring resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Get in Touch</h3>

              <div className="space-y-4">
                <a
                  href="mailto:hello@mapleservice.com"
                  className="glass p-6 rounded-2xl card-hover flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      hello@mapleservice.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-2xl card-hover flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp Chat</div>
                    <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      Chat with us instantly
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="glass p-6 rounded-2xl card-hover flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Book a Call</div>
                    <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      Schedule a strategy session
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Why Choose Maple?</h3>
              <ul className="space-y-3">
                {[
                  "Premium quality deliverables",
                  "Transparent pricing",
                  "Dedicated project team",
                  "On-time delivery guarantee",
                  "Ongoing support & maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Profile */}
            <div className="aurora-gradient-subtle p-6 rounded-2xl text-center">
              <Badge className="mb-3">Resources</Badge>
              <h3 className="font-semibold mb-2">Company Profile</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download our detailed company profile to learn more about our capabilities and past work.
              </p>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-20">
          <SectionHeader
            align="center"
            badge="Our Presence"
            title="Where We Are"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                city: "Dhaka",
                country: "Bangladesh",
                address: "Gulshan 1, Dhaka 1212",
              },
              {
                city: "New York",
                country: "United States",
                address: "Manhattan, New York",
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "Central London",
              },
            ].map((office, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold mb-1">{office.city}</div>
                <div className="text-muted-foreground text-sm mb-3">{office.country}</div>
                <p className="text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

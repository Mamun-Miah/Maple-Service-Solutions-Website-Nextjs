import { services } from "@/content/services"
import { ServiceCard } from "@/components/cards/service-card"
import { SectionHeader } from "@/components/components/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Code2, Database, Cpu, TrendingUp, Bot, Zap } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services",
  description: "Our comprehensive suite of design, engineering, and growth services to help your business succeed.",
}

const serviceIcons: Record<string, any> = {
  "Brand & Identity Systems": Palette,
  "Product Design (UX/UI)": Bot,
  "Web Experiences & Platforms": Code2,
  "Engineering & Development": Database,
  "AI & Automation Integration": Cpu,
  "Growth & Optimization": TrendingUp,
}

export default function ServicesPage() {
  return (
    <div className="section-container">
      <div className="content-max">
        <SectionHeader
          badge="Our Services"
          title="What We Do"
          description="End-to-end capabilities from strategy to execution, all under one roof."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.name] || Zap
            return (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <ServiceCard
                  title={service.name}
                  description={service.tagline}
                  icon={<Icon className="h-6 w-6" />}
                />
              </Link>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <SectionHeader
            badge="Our Process"
            title="How We Work With You"
            description="A proven, collaborative process that ensures great outcomes every time."
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We learn your business, goals, and audience deeply.",
              },
              {
                number: "02",
                title: "Strategy",
                description: "We craft a clear roadmap for success together.",
              },
              {
                number: "03",
                title: "Execution",
                description: "We build with precision, quality, and speed.",
              },
              {
                number: "04",
                title: "Growth",
                description: "We optimize and scale for long-term impact.",
              },
            ].map((step, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <div className="text-4xl font-bold text-gradient mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Design Expertise</h3>
            <ul className="space-y-3">
              {[
                "Brand strategy and identity systems",
                "Product design and UX/UI",
                "Design systems and component libraries",
                "User research and testing",
                "Interaction design and motion",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Engineering Expertise</h3>
            <ul className="space-y-3">
              {[
                "Full-stack web development",
                "Mobile application development",
                "Cloud infrastructure and DevOps",
                "AI/ML integration",
                "API design and development",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to start your project? Get in touch and let's discuss how we can help.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

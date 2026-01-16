import Link from "next/link"
import { industries } from "@/content/industries"
import { SectionHeader } from "@/components/components/section-header"
import { Button } from "@/components/ui/button"
import { Database, Server, Rocket, Cpu, ShoppingBag, Truck, Building, GraduationCap, HeartPulse, Wallet, Globe } from "lucide-react"

export const metadata = {
  title: "Industries",
  description: "Deep expertise across multiple sectors, with specialized solutions for each industry we serve.",
}

const industryIcons: Record<string, any> = {
  fintech: Wallet,
  healthtech: HeartPulse,
  edtech: GraduationCap,
  retail: ShoppingBag,
  logistics: Truck,
  gov: Building,
  saas: Rocket,
  enterprise: Server,
}

export default function IndustriesPage() {
  return (
    <div className="section-container">
      <div className="content-max">
        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          description="Deep expertise across multiple sectors, with specialized solutions for each industry we serve."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.id] || Globe
            return (
              <div key={industry.id} className="glass card-hover p-8 rounded-2xl h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-base text-muted-foreground mb-6">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {industry.outcomes.slice(0, 3).map((outcome, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We adapt our expertise to various industries. Let's discuss your specific needs.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

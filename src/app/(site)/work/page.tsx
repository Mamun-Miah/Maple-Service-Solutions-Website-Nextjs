import { caseStudies } from "@/content/work"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { SectionHeader } from "@/components/components/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export const metadata = {
  title: "Work",
  description: "Explore our portfolio of case studies showing how we've helped businesses transform and grow.",
}

const categories = ["All", "FinTech", "HealthTech", "Retail & Commerce", "SaaS"]

export default function WorkPage() {
  return (
    <div className="section-container">
      <div className="content-max">
        <SectionHeader
          badge="Our Work"
          title="Featured Case Studies"
          description="Real impact, real results. See how we've helped businesses transform."
        />

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              title={caseStudy.title}
              category={caseStudy.category}
              description={caseStudy.summary}
              metrics={caseStudy.impact}
            />
          ))}
        </div>

        {/* Impact Summary */}
        <div className="aurora-gradient-subtle rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Impact by the Numbers
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Client Satisfaction", value: "98%" },
              { label: "On-Time Delivery", value: "95%" },
              { label: "Average ROI", value: "3.5x" },
              { label: "Long-term Partnerships", value: "85%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help transform your business.
          </p>
          <Button size="lg">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}

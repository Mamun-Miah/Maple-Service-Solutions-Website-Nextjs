import { notFound } from "next/navigation"
import Link from "next/link"
import { getServiceBySlug, services } from "@/content/services"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/components/section-header"
import { ArrowRight, CheckCircle2, Zap, ArrowLeft } from "lucide-react"
// import { cn } from "@/lib/utils"
import { Params } from "next/dist/server/request/params"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Params> {
  const { slug } = await params

  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.name} - Maple Service Solution`,
    description: service.tagline,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params

  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="section-container">
      <div className="content-max">
        {/* Breadcrumb */}
        <Link
          href="/services"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        {/* Service Header */}
        <div className="mb-12">
          <Badge className="mb-4">Service</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {service.name}
          </h1>

          <p className="text-2xl text-muted-foreground mb-6 max-w-3xl">
            {service.tagline}
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl">
            {service.longDescription}
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <SectionHeader
            badge="What We Do"
            title="Our Capabilities"
          />
          <div className="grid md:grid-cols-2 gap-4">
            {service.capabilities.map((capability, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl flex gap-4 items-start"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base">{capability}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <SectionHeader
            badge="How We Work"
            title="Our Process"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {service.process.map((phase, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{phase.phase}</h3>
                </div>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Work */}
        {service.caseStudies && service.caseStudies.length > 0 && (
          <div className="mb-16">
            <SectionHeader
              badge="Related Work"
              title="Case Studies"
              description="See how we've delivered this service for real clients."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.caseStudies.map((caseStudyId) => (
                <Link key={caseStudyId} href={`/work/${caseStudyId}`}>
                  <div className="glass card-hover p-6 rounded-2xl h-full">
                    <h3 className="font-semibold mb-2">
                      {caseStudyId.split("-").map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(" ")}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      See how we helped transform their business.
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need {service.name}?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your goals.
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

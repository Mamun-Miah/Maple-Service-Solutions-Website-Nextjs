import { notFound } from "next/navigation"
import Link from "next/link"
import { getProductBySlug, products } from "@/content/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/components/section-header"
import { ArrowRight, ExternalLink, CheckCircle2, Code2, Rocket, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} - Maple Service Solution`,
    description: product.tagline,
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const statusConfig = {
    live: { label: "Live", color: "bg-green-500/10 text-green-500 border-green-500/20", icon: Zap },
    beta: { label: "Beta", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Rocket },
    "coming-soon": { label: "Coming Soon", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: Code2 },
  }
  const status = statusConfig[product.status]
  const StatusIcon = status.icon

  return (
    <div className="section-container">
      <div className="content-max">
        {/* Breadcrumb */}
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 group"
        >
          ← Back to Products
        </Link>

        {/* Product Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={cn("flex items-center gap-1.5", status.color)}>
              <StatusIcon className="h-3 w-3" />
              {status.label}
            </Badge>
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-muted-foreground mb-6 max-w-3xl">
            {product.tagline}
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl">
            {product.longDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {product.website && (
              <Button size="lg" className="group">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            )}
            <Link href="/contact">
              <Button size="lg" variant="outline" className="group">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <SectionHeader
            badge="Features"
            title="What It Does"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl flex gap-4 items-start"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <SectionHeader
            badge="Technology"
            title="Built With"
          />
          <div className="glass p-8 rounded-2xl">
            <div className="flex flex-wrap gap-3">
              {product.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-base px-4 py-2">
                  <Code2 className="h-4 w-4 mr-2" />
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Link */}
        {product.caseStudy && (
          <div className="aurora-gradient-subtle rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                See {product.name} in Action
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Learn how {product.name} has helped real businesses achieve their goals.
              </p>
              <Link href={`/work/${product.caseStudy}`}>
                <Button size="lg" variant="outline" className="group">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Interested in {product.name}?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's discuss how this product can help your business.
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

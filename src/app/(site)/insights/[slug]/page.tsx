import { notFound } from "next/navigation"
import Link from "next/link"
import { getInsightBySlug, insights } from "@/content/insights"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const insight = getInsightBySlug(params.slug)

  if (!insight) {
    return {
      title: "Insight Not Found",
    }
  }

  return {
    title: `${insight.title} - Maple Insights`,
    description: insight.excerpt,
  }
}

export default function InsightPage({ params }: PageProps) {
  const insight = getInsightBySlug(params.slug)

  if (!insight) {
    notFound()
  }

  const currentIndex = insights.findIndex(i => i.id === insight.id)
  const prevInsight = currentIndex > 0 ? insights[currentIndex - 1] : null
  const nextInsight = currentIndex < insights.length - 1 ? insights[currentIndex + 1] : null

  return (
    <div className="section-container">
      <div className="content-max">
        {/* Breadcrumb */}
        <Link
          href="/insights"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary">{insight.category}</Badge>
            {insight.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {insight.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {insight.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 border-y border-border/50 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold text-primary">
                {insight.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{insight.author.name}</div>
                <div className="text-sm text-muted-foreground">{insight.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(insight.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {insight.readTime} min read
            </div>
            <div className="ml-auto">
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <div
            className="prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:mb-2 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </article>

        {/* Tags */}
        <div className="glass p-6 rounded-2xl mb-12">
          <h3 className="font-semibold mb-4">Topics</h3>
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {(prevInsight || nextInsight) && (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {prevInsight && (
              <Link href={`/insights/${prevInsight.slug}`}>
                <div className="glass p-6 rounded-2xl card-hover">
                  <div className="text-sm text-muted-foreground mb-2">Previous</div>
                  <h3 className="font-semibold mb-2">{prevInsight.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {prevInsight.excerpt}
                  </p>
                </div>
              </Link>
            )}
            {nextInsight && (
              <Link href={`/insights/${nextInsight.slug}`} className="md:text-right">
                <div className="glass p-6 rounded-2xl card-hover">
                  <div className="text-sm text-muted-foreground mb-2">Next</div>
                  <h3 className="font-semibold mb-2">{nextInsight.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {nextInsight.excerpt}
                  </p>
                </div>
              </Link>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help bring your ideas to life.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

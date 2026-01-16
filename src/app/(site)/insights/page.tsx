import Link from "next/link"
import { insights, getRecentInsights, getFeaturedInsights } from "@/content/insights"
import { SectionHeader } from "@/components/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Insights",
  description: "Thought leadership, industry insights, and technical expertise from the Maple team.",
}

const categories = ["All", "AI & Technology", "Design & UX", "Engineering", "Strategy"]

export default function InsightsPage() {
  const featuredInsights = getFeaturedInsights()
  const recentInsights = getRecentInsights()

  return (
    <div className="section-container">
      <div className="content-max">
        <SectionHeader
          badge="Insights"
          title="Thoughts & Insights"
          description="Thought leadership, industry insights, and technical expertise from the Maple team."
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

        {/* Featured Insights */}
        {featuredInsights.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Featured</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredInsights.map((insight) => (
                <Link key={insight.id} href={`/insights/${insight.slug}`}>
                  <div className="glass card-hover p-8 rounded-2xl h-full">
                    <Badge variant="secondary" className="mb-4">
                      {insight.category}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-3">
                      {insight.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {new Date(insight.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {insight.readTime} min read
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary mt-4">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Recent Insights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Recent</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentInsights.map((insight) => (
              <Link key={insight.id} href={`/insights/${insight.slug}`}>
                <div className="glass card-hover p-6 rounded-2xl h-full flex flex-col">
                  <Badge variant="outline" className="mb-3 w-fit">
                    {insight.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {insight.readTime} min
                    </div>
                    <span>{new Date(insight.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tags Cloud */}
        <div className="glass p-8 rounded-2xl mb-16">
          <h3 className="text-xl font-bold mb-4">Explore by Topic</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(insights.flatMap(i => i.tags))).map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary/10">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get the latest insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <Button size="lg">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

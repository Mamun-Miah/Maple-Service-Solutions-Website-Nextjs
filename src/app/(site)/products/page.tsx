import { products } from "@/content/products"
import { ProductCard } from "@/components/cards/product-card"
import { SectionHeader } from "@/components/components/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Lock, Globe, Database } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Products",
  description: "Explore our portfolio of AI-powered products and platforms that solve real business problems.",
}

const categoryIcons: Record<string, any> = {
  AI: Bot,
  Platform: Database,
  Infrastructure: Globe,
  Security: Lock,
}

export default function ProductsPage() {
  const liveProducts = products.filter(p => p.status === "live")
  const betaProducts = products.filter(p => p.status === "beta")
  const upcomingProducts = products.filter(p => p.status === "coming-soon")

  return (
    <div className="section-container">
      <div className="content-max">
        <SectionHeader
          badge="Our Products"
          title="Products We've Built"
          description="Real products solving real problems, from MVP to enterprise scale."
        />

        <div className="mb-12 flex flex-wrap gap-2">
          {["All", "Live", "Beta", "Coming Soon"].map((filter) => (
            <Button
              key={filter}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Live Products */}
        {liveProducts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-5 w-5 text-green-500" />
              <h3 className="text-2xl font-semibold">Live Products</h3>
              <Badge variant="secondary">{liveProducts.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <ProductCard
                    name={product.name}
                    description={product.tagline}
                    tags={product.tags}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Beta Products */}
        {betaProducts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-5 w-5 text-yellow-500" />
              <h3 className="text-2xl font-semibold">Beta Products</h3>
              <Badge variant="secondary">{betaProducts.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {betaProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <ProductCard
                    name={product.name}
                    description={product.tagline}
                    tags={product.tags}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon */}
        {upcomingProducts.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-5 w-5 text-blue-500" />
              <h3 className="text-2xl font-semibold">Coming Soon</h3>
              <Badge variant="secondary">{upcomingProducts.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <ProductCard
                    name={product.name}
                    description={product.tagline}
                    tags={product.tags}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 aurora-gradient-subtle rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your Custom Product
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't see what you need? Let's build something custom for your specific requirements.
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

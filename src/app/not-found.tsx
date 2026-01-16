"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <div className="text-center content-max">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => router.push("/")}
            className="group"
          >
            <Home className="mr-2 h-4 w-4" />
            Back Home
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

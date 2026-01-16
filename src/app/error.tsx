"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, RotateCcw } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <div className="text-center content-max">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
          Oops!
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Something Went Wrong
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          We apologize for the inconvenience. An unexpected error has occurred. Please try again or contact us if the problem persists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={reset}
            className="group"
          >
            <RotateCcw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform" />
            Try Again
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push("/")}
            className="group"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}

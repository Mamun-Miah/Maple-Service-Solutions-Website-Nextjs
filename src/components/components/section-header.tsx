import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-8",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full border border-border/50 bg-accent/50 text-accent-foreground">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}

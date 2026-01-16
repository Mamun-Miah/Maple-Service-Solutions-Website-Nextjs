"use client"

import * as React from "react"
import { ArrowRight, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface CaseStudyCardProps {
  title: string
  category: string
  description: string
  metrics?: Array<{
    label: string
    value: string
  }>
  image?: string
  className?: string
}

export function CaseStudyCard({
  title,
  category,
  description,
  metrics,
  image,
  className,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28 }}
    >
      <Card className={cn(
        "h-full glass card-hover overflow-hidden",
        className
      )}>
        {image && (
          <div className="relative h-48 md:h-56 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <div
              className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10"
              style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <Badge className="absolute top-4 left-4 z-20">
              {category}
            </Badge>
          </div>
        )}
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          {metrics && metrics.length > 0 && (
            <div className="flex gap-4 pt-2">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <div>
                    <div className="font-semibold">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <div className="p-6 pt-0">
          <Button variant="ghost" className="group w-full justify-between">
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

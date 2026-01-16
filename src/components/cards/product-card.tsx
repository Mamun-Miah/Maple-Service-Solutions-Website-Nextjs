"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface ProductCardProps {
  name: string
  description: string
  tags: string[]
  icon?: React.ReactNode
  className?: string
}

export function ProductCard({
  name,
  description,
  tags,
  icon,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28 }}
    >
      <Card className={cn(
        "h-full glass card-hover overflow-hidden",
        className
      )}>
        <CardHeader className="space-y-4">
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="group w-full justify-between">
            View Product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

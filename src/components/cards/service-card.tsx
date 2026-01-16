"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28 }}
    >
      <Card className={cn(
        "h-full glass card-hover overflow-hidden",
        className
      )}>
        <CardContent className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="ghost" className="group w-full justify-between">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  description: string
  icon?: React.ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Progress Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-6"
          >
            {/* Icon/Circle */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                {item.icon || (
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Number */}
            <div className="hidden md:block flex-shrink-0 pt-2">
              <div className="text-6xl font-bold text-muted-foreground/10">
                0{index + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface StatItem {
  label: string
  value: string
  description?: string
}

export interface StatsRowProps {
  stats: StatItem[]
  className?: string
}

export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <div className={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
      className
    )}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center md:text-left"
        >
          <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-foreground mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-xs text-muted-foreground">
              {stat.description}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

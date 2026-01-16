"use client"

import * as React from "react"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.28 }}
    >
      <Card className={cn(
        "h-full glass card-hover",
        className
      )}>
        <CardContent className="p-6 space-y-4">
          <Quote className="h-8 w-8 text-primary/20" />
          <p className="text-base leading-relaxed italic">
            "{quote}"
          </p>
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback>
                {author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{author}</div>
              <div className="text-sm text-muted-foreground">
                {role}, {company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

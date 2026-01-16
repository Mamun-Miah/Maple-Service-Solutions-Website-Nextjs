import { StatsRow } from "@/components/layout/stats-row"
import { SectionHeader } from "@/components/components/section-header"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/cards/testimonial-card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Lightbulb, Award, Users, Globe, Zap, Code2, Palette } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us",
  description: "Learn about Maple Service Solution - a product company with the soul of a design studio and the precision of an engineering powerhouse.",
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on outcomes, not output. Every decision tied to your goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends, bringing cutting-edge solutions to every project.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "Premium quality in everything we do. Good enough is never good enough.",
  },
  {
    icon: Zap,
    title: "Growth Partner",
    description: "We're in it for the long haul. Your success is our success.",
  },
]

const team = [
  {
    name: "Ahmed Rahman",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in technology and product development.",
  },
  {
    name: "Fatima Ahmed",
    role: "Head of Design",
    description: "Award-winning designer with expertise in UX/UI and brand systems.",
  },
  {
    name: "Kamal Hossain",
    role: "CTO",
    description: "Engineering expert with deep experience in scalable systems.",
  },
]

export default function AboutPage() {
  return (
    <div className="section-container">
      <div className="content-max">
        {/* Hero Section */}
        <div className="mb-20">
          <Badge className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building the Future,{" "}
            <span className="text-gradient">From Bangladesh</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Maple Service Solution is a product company with the soul of a design studio and the precision of an engineering powerhouse. We build intelligent products that define markets, combining world-class design, cutting-edge technology, and a deep understanding of what makes businesses succeed.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              To transform how businesses operate by building intelligent products that solve real problems at scale. We believe great technology should be accessible to everyone, everywhere.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              To put Bangladesh on the map as a global hub for innovation and product excellence. We're building products that compete on the world stage and creating opportunities for talent to thrive.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="glass aurora-gradient-subtle rounded-3xl p-8 md:p-12 mb-20">
          <StatsRow
            stats={[
              { label: "Projects Delivered", value: "150+" },
              { label: "Countries Served", value: "12+" },
              { label: "Years of Experience", value: "8+" },
              { label: "Team Members", value: "50+" },
            ]}
          />
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            badge="Our Values"
            title="What We Believe In"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <SectionHeader
            badge="Our Journey"
            title="The Maple Story"
          />
          <div className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Maple was founded with a simple but powerful idea: that world-class products can be built anywhere, by anyone with the right vision, talent, and dedication.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Starting in Bangladesh, we set out to prove that local teams could deliver products that compete globally. We built our own products, learned from failures, celebrated successes, and grew a team of passionate designers, engineers, and strategists.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to work with businesses around the world, helping them transform through innovative products and strategic thinking. Our journey is far from over—we're just getting started.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            badge="Leadership"
            title="Meet Our Leadership"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="glass card-hover p-6 rounded-2xl text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            badge="Our Expertise"
            title="What We Do Best"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Palette,
                title: "Design",
                items: ["Brand Identity", "UX/UI Design", "Design Systems", "User Research"],
              },
              {
                icon: Code2,
                title: "Engineering",
                items: ["Web Development", "Mobile Apps", "Cloud & DevOps", "AI/ML"],
              },
              {
                icon: Zap,
                title: "Growth",
                items: ["Strategy", "Analytics", "Optimization", "Automation"],
              },
            ].map((category, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a client, partner, or team member—we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Start a Project
              </Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

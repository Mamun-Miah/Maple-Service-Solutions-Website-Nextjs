export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  category: string
  year: number
  summary: string
  description: string
  problem: string
  solution: string
  impact: Array<{
    label: string
    value: string
  }>
  timeline: string
  techStack: string[]
  services: string[]
  coverImage?: string
  gallery?: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-redesign",
    slug: "fintech-redesign",
    title: "FinTech Platform Redesign + Scale",
    client: "Leading FinTech Company",
    category: "FinTech",
    year: 2024,
    summary: "Complete platform redesign and architecture overhaul to support 10x growth",
    description:
      "We partnered with a leading FinTech company to completely redesign their platform and re-engineer their architecture. The goal was to improve user experience while scaling to handle a tenfold increase in users and transactions.",
    problem:
      "The existing platform had accumulated significant technical debt and UX issues. User engagement was declining, the system struggled with load during peak hours, and the codebase was difficult to maintain. The company needed to scale rapidly to meet growing demand.",
    solution:
      "We conducted extensive user research to understand pain points and opportunities. Based on insights, we redesigned the entire user experience with a focus on simplicity and trust. Simultaneously, we re-architected the backend using modern patterns, implemented caching strategies, and set up auto-scaling infrastructure.",
    impact: [
      { label: "User Engagement", value: "+180%" },
      { label: "Transaction Speed", value: "3x Faster" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Load Capacity", value: "10x Scale" }
    ],
    timeline: "6 months",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    services: [
      "Product Design",
      "Engineering & Development",
      "Growth & Optimization"
    ],
    testimonial: {
      quote: "Maple transformed our platform completely. The new design is beautiful, and the system has never been more stable. They delivered ahead of schedule and exceeded our expectations.",
      author: "Ahmed Rahman",
      role: "CTO"
    }
  },
  {
    id: "ai-startup-launch",
    slug: "ai-startup-launch",
    title: "AI Startup Brand + Product Launch",
    client: "AI Healthcare Startup",
    category: "HealthTech",
    year: 2024,
    summary: "Complete brand creation and product launch for an AI-powered healthcare platform",
    description:
      "We helped a healthcare AI startup build their brand from scratch and launch their first product. The challenge was to create trust in a new AI-driven healthcare solution while explaining complex technology in accessible terms.",
    problem:
      "The startup had innovative AI technology but no brand, no product, and no clear go-to-market strategy. They needed to build credibility in the highly regulated healthcare space while differentiating themselves from competitors.",
    solution:
      "We began with brand strategy workshops to define their positioning and personality. We created a visual identity that conveyed trust, innovation, and accessibility. For the product, we designed an intuitive interface that made AI insights actionable for healthcare providers. We also developed marketing materials and a launch strategy.",
    impact: [
      { label: "Launch Success", value: "500+ Sign-ups" },
      { label: "Media Coverage", value: "15+ Features" },
      { label: "User Satisfaction", value: "4.8/5" },
      { label: "Funding Raised", value: "$2M Seed" }
    ],
    timeline: "4 months",
    techStack: [
      "Next.js",
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "PostgreSQL"
    ],
    services: [
      "Brand & Identity Systems",
      "Product Design",
      "Engineering & Development"
    ],
    testimonial: {
      quote: "Maple understood our vision from day one. They built a brand that perfectly captures who we are, and the product they designed has received incredible feedback from our users.",
      author: "Dr. Sarah Khan",
      role: "CEO & Founder"
    }
  },
  {
    id: "retail-distribution",
    slug: "retail-distribution",
    title: "Retail Distribution System Build",
    client: "FMCG Distribution Company",
    category: "Retail & Commerce",
    year: 2023,
    summary: "End-to-end distribution management system connecting suppliers, distributors, and retailers",
    description:
      "We built a comprehensive distribution management system for a major FMCG company. The system manages the entire supply chain from supplier to retailer, providing real-time visibility and intelligent routing.",
    problem:
      "The company was managing distribution operations using spreadsheets and legacy systems. This resulted in inefficient routes, poor inventory visibility, delayed deliveries, and lost sales. They needed a modern, integrated solution.",
    solution:
      "We designed and built a web-based platform that connects all stakeholders in the distribution chain. Features include real-time inventory tracking, route optimization algorithms, automated ordering, and comprehensive analytics dashboards. The system works offline for field sales staff.",
    impact: [
      { label: "Delivery Efficiency", value: "+45%" },
      { label: "Stock Accuracy", value: "99.5%" },
      { label: "Order Processing", value: "3x Faster" },
      { label: "Cost Reduction", value: "-30%" }
    ],
    timeline: "8 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Google Maps API",
      "AWS",
      "Redis"
    ],
    services: [
      "Web Experiences & Platforms",
      "Engineering & Development",
      "AI & Automation Integration"
    ],
    testimonial: {
      quote: "This system has transformed our operations. We have complete visibility into our distribution network, and efficiency has improved dramatically. Maple's team delivered a solution that exceeded our expectations.",
      author: "Mohammad Hassan",
      role: "Operations Director"
    }
  }
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.id === id)
}

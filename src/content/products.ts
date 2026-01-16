export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  tags: string[]
  features: string[]
  techStack: string[]
  icon?: string
  status: "live" | "beta" | "coming-soon"
  website?: string
  caseStudy?: string
}

export const products: Product[] = [
  {
    id: "trustos",
    slug: "trustos",
    name: "TrustOS",
    tagline: "National trust infrastructure for people & businesses",
    description: "Build trust with comprehensive identity verification, compliance management, and reputation scoring systems.",
    longDescription:
      "TrustOS is a comprehensive trust infrastructure platform that enables businesses to verify identities, manage compliance, and build reputation scores. Built for scale and security, it serves as the foundation for trust in digital ecosystems across Bangladesh and beyond.",
    tags: ["AI", "Platform", "Infrastructure", "Security"],
    features: [
      "Identity verification with multiple data sources",
      "Real-time compliance monitoring",
      "Reputation scoring algorithms",
      "Audit trail and reporting",
      "API-first architecture",
      "Enterprise-grade security"
    ],
    techStack: ["TypeScript", "Python", "PostgreSQL", "Redis", "AWS"],
    status: "live",
  },
  {
    id: "voice-erp",
    slug: "voice-erp",
    name: "Voice ERP",
    tagline: "WhatsApp & voice-driven ERP for SMEs",
    description: "Run your entire business through WhatsApp and voice commands. No apps, no learning curve.",
    longDescription:
      "Voice ERP transforms how small businesses operate by enabling natural language interactions with enterprise systems. Process orders, manage inventory, track shipments, and generate reports—all through WhatsApp or simple voice commands.",
    tags: ["AI", "Platform", "WhatsApp", "Voice"],
    features: [
      "Natural language interface",
      "WhatsApp integration",
      "Voice command support",
      "Real-time analytics",
      "Multi-location support",
      "Offline mode"
    ],
    techStack: ["Node.js", "Python", "MongoDB", "Twilio", "OpenAI"],
    status: "live",
  },
  {
    id: "infinitylearn",
    slug: "infinitylearn",
    name: "InfinityLearn",
    tagline: "AI-powered learning platform",
    description: "Personalized learning experiences powered by AI. Adapt, engage, and excel.",
    longDescription:
      "InfinityLearn uses advanced AI to create personalized learning paths for every learner. Whether you're upskilling teams or educating students, our platform adapts to individual learning styles, progress, and goals to maximize outcomes.",
    tags: ["AI", "Education", "Platform", "Analytics"],
    features: [
      "Adaptive learning paths",
      "Real-time progress tracking",
      "Content recommendation engine",
      "Interactive assessments",
      "Collaborative learning tools",
      "Multilingual support"
    ],
    techStack: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    status: "beta",
  },
  {
    id: "promptsite",
    slug: "promptsite",
    name: "PromptSite",
    tagline: "Prompt-driven website builder",
    description: "Describe what you want. Watch AI build it. Deploy in minutes, not months.",
    longDescription:
      "PromptSite revolutionizes web development by allowing anyone to create professional websites through natural language prompts. Our AI understands design principles, industry standards, and brand guidelines to deliver production-ready websites instantly.",
    tags: ["AI", "No-Code", "Web", "Automation"],
    features: [
      "Natural language interface",
      "AI-generated code",
      "Responsive designs",
      "SEO optimization",
      "Instant deployment",
      "Custom branding"
    ],
    techStack: ["Next.js", "OpenAI", "Vercel", "TailwindCSS", "shadcn/ui"],
    status: "beta",
  },
  {
    id: "distribution-os",
    slug: "distribution-os",
    name: "Distribution OS",
    tagline: "Distribution & secondary sales intelligence",
    description: "Optimize your distribution network with real-time insights and intelligent routing.",
    longDescription:
      "Distribution OS provides distributors with complete visibility into their secondary sales networks. Track inventory, optimize routes, analyze performance, and make data-driven decisions to scale distribution operations efficiently.",
    tags: ["Analytics", "Platform", "Logistics", "B2B"],
    features: [
      "Real-time inventory tracking",
      "Route optimization algorithms",
      "Sales analytics dashboard",
      "Retailer management",
      "Automated ordering",
      "Performance insights"
    ],
    techStack: ["TypeScript", "Python", "PostgreSQL", "Google Maps API", "AWS"],
    status: "live",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

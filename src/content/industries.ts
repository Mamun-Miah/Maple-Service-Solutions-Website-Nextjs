export interface Industry {
  id: string
  slug: string
  name: string
  description: string
  outcomes: string[]
  icon?: string
}

export const industries: Industry[] = [
  {
    id: "fintech",
    slug: "fintech",
    name: "FinTech",
    description: "Building secure, scalable financial solutions that build trust and drive adoption.",
    outcomes: [
      "Secure payment processing platforms",
      "Banking and wallet applications",
      "Investment and trading platforms",
      "Regulatory compliance systems",
      "Blockchain and cryptocurrency solutions"
    ]
  },
  {
    id: "healthtech",
    slug: "healthtech",
    name: "HealthTech",
    description: "Creating healthcare technology that improves outcomes and patient experiences.",
    outcomes: [
      "Telemedicine platforms",
      "Hospital management systems",
      "AI-powered diagnostics",
      "Patient engagement tools",
      "Health data analytics"
    ]
  },
  {
    id: "edtech",
    slug: "edtech",
    name: "EdTech",
    description: "Developing learning platforms that make education accessible and engaging.",
    outcomes: [
      "LMS and learning platforms",
      "Virtual classroom solutions",
      "Assessment and testing systems",
      "Student information systems",
      "AI-powered personalized learning"
    ]
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail & Commerce",
    description: "Building commerce experiences that drive sales and customer loyalty.",
    outcomes: [
      "E-commerce platforms",
      "POS and inventory systems",
      "Omnichannel retail solutions",
      "Customer loyalty programs",
      "Distribution management"
    ]
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "Logistics",
    description: "Creating systems that optimize supply chains and streamline operations.",
    outcomes: [
      "Fleet management systems",
      "Route optimization platforms",
      "Warehouse management",
      "Tracking and visibility solutions",
      "Last-mile delivery systems"
    ]
  },
  {
    id: "gov",
    slug: "gov",
    name: "Gov & Smart Systems",
    description: "Developing digital infrastructure for smarter governance and public services.",
    outcomes: [
      "Digital identity systems",
      "E-government portals",
      "Smart city solutions",
      "Public service platforms",
      "Data analytics for policy"
    ]
  },
  {
    id: "saas",
    slug: "saas",
    name: "SaaS & Startups",
    description: "Helping startups build MVPs fast and scale products globally.",
    outcomes: [
      "MVP development",
      "Product design and engineering",
      "Go-to-market support",
      "Scale and optimization",
      "Fundraising materials"
    ]
  },
  {
    id: "enterprise",
    slug: "enterprise",
    name: "Enterprise & SME",
    description: "Transforming businesses through digital innovation and automation.",
    outcomes: [
      "Digital transformation strategy",
      "Custom enterprise software",
      "Process automation",
      "Legacy system modernization",
      "Employee experience platforms"
    ]
  }
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug)
}

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((industry) => industry.id === id)
}

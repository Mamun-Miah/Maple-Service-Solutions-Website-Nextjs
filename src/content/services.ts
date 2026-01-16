export interface Service {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  capabilities: string[]
  process: Array<{
    phase: string
    description: string
  }>
  caseStudies?: string[]
}

export const services: Service[] = [
  {
    id: "brand-identity",
    slug: "brand-identity",
    name: "Brand & Identity Systems",
    tagline: "Crafting distinctive brand systems that resonate",
    description: "We build brand systems that tell compelling stories and create lasting impressions.",
    longDescription:
      "Our brand and identity work goes beyond logos. We create comprehensive brand systems that include visual identity, voice and tone, brand guidelines, and implementation strategies. Every element works together to create a cohesive, memorable brand experience.",
    capabilities: [
      "Brand strategy and positioning",
      "Visual identity design",
      "Brand guidelines and systems",
      "Logo and iconography",
      "Typography and color systems",
      "Brand voice and messaging",
      "Brand implementation"
    ],
    process: [
      {
        phase: "Discovery",
        description: "Deep research into your market, competitors, and audience to uncover unique positioning opportunities."
      },
      {
        phase: "Strategy",
        description: "Define your brand core, personality, and messaging framework to guide all creative decisions."
      },
      {
        phase: "Design",
        description: "Create visual identity systems including logos, typography, colors, and supporting elements."
      },
      {
        phase: "Implementation",
        description: "Build comprehensive guidelines and roll out your brand across all touchpoints."
      }
    ],
    caseStudies: ["ai-startup-launch", "fintech-redesign"]
  },
  {
    id: "product-design",
    slug: "product-design",
    name: "Product Design (UX/UI)",
    tagline: "Designing products users love to use",
    description: "We create intuitive, delightful digital experiences that drive engagement and conversion.",
    longDescription:
      "Our product design approach balances user needs with business objectives. We conduct research, prototype rapidly, and iterate based on feedback to create products that are not only beautiful but also highly usable and effective at achieving your goals.",
    capabilities: [
      "User research and interviews",
      "User journey mapping",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual UI design",
      "Design systems",
      "Usability testing"
    ],
    process: [
      {
        phase: "Research",
        description: "Understand your users through interviews, surveys, and competitive analysis."
      },
      {
        phase: "Ideation",
        description: "Generate concepts and solutions through workshops, sketching, and collaborative sessions."
      },
      {
        phase: "Design",
        description: "Create detailed designs and interactive prototypes for testing and refinement."
      },
      {
        phase: "Validation",
        description: "Test with real users and iterate based on feedback to ensure optimal outcomes."
      }
    ],
    caseStudies: ["ai-startup-launch", "fintech-redesign"]
  },
  {
    id: "web-experiences",
    slug: "web-experiences",
    name: "Web Experiences & Platforms",
    tagline: "Building powerful web platforms that scale",
    description: "We create high-performance web experiences that deliver exceptional user experiences.",
    longDescription:
      "From marketing websites to complex web applications, we build digital experiences that are fast, accessible, and engaging. Our technical expertise and design thinking combine to create solutions that work seamlessly across all devices and platforms.",
    capabilities: [
      "Responsive web design",
      "Progressive web apps (PWAs)",
      "Headless CMS integration",
      "E-commerce solutions",
      "Web applications",
      "Performance optimization",
      "Accessibility compliance"
    ],
    process: [
      {
        phase: "Planning",
        description: "Define requirements, architecture, and technical strategy for your web presence."
      },
      {
        phase: "Development",
        description: "Build using modern frameworks with clean, maintainable code and best practices."
      },
      {
        phase: "Integration",
        description: "Connect with APIs, CMS, and third-party services as needed."
      },
      {
        phase: "Launch",
        description: "Deploy, monitor, and optimize for performance and user experience."
      }
    ],
    caseStudies: ["retail-distribution"]
  },
  {
    id: "engineering",
    slug: "engineering",
    name: "Engineering & Development",
    tagline: "Turning complex problems into elegant solutions",
    description: "We engineer robust, scalable software solutions that power your business forward.",
    longDescription:
      "Our engineering team brings deep technical expertise across modern technologies. From architecture design to implementation and maintenance, we deliver high-quality software solutions that are secure, scalable, and built for the long term.",
    capabilities: [
      "Custom software development",
      "API design and development",
      "Mobile applications",
      "Cloud infrastructure",
      "Database design",
      "DevOps and CI/CD",
      "Technical consulting"
    ],
    process: [
      {
        phase: "Architecture",
        description: "Design scalable, maintainable system architecture aligned with your goals."
      },
      {
        phase: "Development",
        description: "Implement using industry best practices, clean code principles, and comprehensive testing."
      },
      {
        phase: "Integration",
        description: "Integrate with existing systems and third-party services as required."
      },
      {
        phase: "Deployment",
        description: "Deploy to production with monitoring, logging, and ongoing support."
      }
    ],
    caseStudies: ["fintech-redesign", "retail-distribution"]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    name: "AI & Automation Integration",
    tagline: "Harness the power of AI to transform your operations",
    description: "We integrate AI and automation to streamline workflows and unlock new capabilities.",
    longDescription:
      "AI is transforming how businesses operate. We help you identify opportunities, implement AI solutions, and build automated workflows that increase efficiency, reduce costs, and create competitive advantages. From chatbots to predictive analytics, we make AI work for you.",
    capabilities: [
      "AI strategy and consulting",
      "Chatbots and virtual assistants",
      "Process automation",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "ML model development"
    ],
    process: [
      {
        phase: "Assessment",
        description: "Evaluate your operations to identify high-impact AI and automation opportunities."
      },
      {
        phase: "Design",
        description: "Design solutions and workflows that leverage AI effectively and responsibly."
      },
      {
        phase: "Implementation",
        description: "Build and integrate AI models, automation tools, and supporting infrastructure."
      },
      {
        phase: "Optimization",
        description: "Monitor performance, gather feedback, and continuously improve AI systems."
      }
    ],
    caseStudies: ["fintech-redesign"]
  },
  {
    id: "growth",
    slug: "growth",
    name: "Growth & Optimization",
    tagline: "Data-driven strategies to accelerate growth",
    description: "We optimize your digital presence to drive growth through better conversion and engagement.",
    longDescription:
      "Growth is a continuous process of experimentation and optimization. We combine analytics, user research, and design thinking to identify opportunities and implement changes that improve key metrics. From CRO to funnel optimization, we help you grow sustainably.",
    capabilities: [
      "Conversion rate optimization",
      "A/B testing",
      "Analytics and tracking",
      "User behavior analysis",
      "Funnel optimization",
      "SEO and performance",
      "Growth strategy"
    ],
    process: [
      {
        phase: "Analysis",
        description: "Analyze current performance, user behavior, and identify bottlenecks."
      },
      {
        phase: "Hypothesis",
        description: "Formulate testable hypotheses based on data and insights."
      },
      {
        phase: "Experimentation",
        description: "Run controlled experiments to validate hypotheses and measure impact."
      },
      {
        phase: "Optimization",
        description: "Implement winning changes and continue iterating for ongoing improvement."
      }
    ],
    caseStudies: ["fintech-redesign"]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}

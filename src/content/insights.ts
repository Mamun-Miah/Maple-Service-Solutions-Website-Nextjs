export interface Insight {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  featured?: boolean
  coverImage?: string
}

export const insights: Insight[] = [
  {
    id: "future-of-ai-in-bangladesh",
    slug: "future-of-ai-in-bangladesh",
    title: "The Future of AI in Bangladesh: Opportunities and Challenges",
    excerpt: "How AI is transforming Bangladesh's tech ecosystem and what it means for businesses and developers.",
    content: `
<p>Bangladesh is experiencing a digital renaissance, and Artificial Intelligence is at the forefront of this transformation. From healthcare to agriculture, AI is opening new possibilities for innovation and growth.</p>

<h2>Current Landscape</h2>
<p>The AI ecosystem in Bangladesh is still in its early stages but growing rapidly. Startups are leveraging AI to solve local problems, from language processing for Bengali to crop yield prediction for farmers. The government's Vision 2041 emphasizes digital transformation, creating a supportive environment for AI adoption.</p>

<h2>Key Opportunities</h2>
<ul>
  <li><strong>Healthcare:</strong> AI-powered diagnostics and telemedicine are improving access to quality healthcare in rural areas.</li>
  <li><strong>Finance:</strong> Fintech companies are using AI for fraud detection, credit scoring, and personalized financial advice.</li>
  <li><strong>Agriculture:</strong> Predictive analytics help farmers optimize yields and reduce waste.</li>
  <li><strong>Education:</strong> Adaptive learning platforms personalize education for millions of students.</li>
</ul>

<h2>Challenges Ahead</h2>
<p>Despite the opportunities, challenges remain. Limited data infrastructure, skill gaps, and regulatory uncertainties need to be addressed. Building AI products that understand Bengali language and cultural context is crucial for widespread adoption.</p>

<h2>The Path Forward</h2>
<p>Bangladesh has the talent and the opportunity to become a significant player in the global AI landscape. By investing in education, infrastructure, and creating an enabling regulatory environment, we can harness AI's potential to drive inclusive growth and innovation.</p>
    `,
    author: {
      name: "Rafiqul Islam",
      role: "AI Research Lead"
    },
    category: "AI & Technology",
    tags: ["AI", "Bangladesh", "Innovation", "Technology"],
    publishedAt: "2024-01-15",
    readTime: 6,
    featured: true
  },
  {
    id: "building-trust-in-digital-products",
    slug: "building-trust-in-digital-products",
    title: "Building Trust in Digital Products: A Design Perspective",
    excerpt: "Trust is the foundation of successful digital products. Here's how to design for trust from the ground up.",
    content: `
<p>In an era of data breaches and privacy concerns, trust has become a critical differentiator for digital products. Users need to feel confident that their data is safe, their privacy is respected, and the product will deliver on its promises.</p>

<h2>The Trust Pyramid</h2>
<p>Trust in digital products builds on multiple layers:</p>
<ul>
  <li><strong>Functional Trust:</strong> Does the product work reliably?</li>
  <li><strong>Security Trust:</strong> Is my data safe?</li>
  <li><strong>Privacy Trust:</strong> Is my information handled responsibly?</li>
  <li><strong>Ethical Trust:</strong> Does the company act ethically?</li>
</ul>

<h2>Design Principles for Trust</h2>
<ol>
  <li><strong>Transparency:</strong> Be clear about what data you collect and why.</li>
  <li><strong>Consistency:</strong> Maintain consistent behavior across the product.</li>
  <li><strong>Control:</strong> Give users control over their data and experience.</li>
  <li><strong>Security Indicators:</strong> Show security measures without being intrusive.</li>
  <li><strong>Clear Communication:</strong> Explain technical concepts in accessible language.</li>
</ol>

<h2>Building Trust Over Time</h2>
<p>Trust isn't built overnight. It requires consistent delivery of value, honest communication about issues, and a genuine commitment to user well-being. Every interaction is an opportunity to strengthen or weaken trust.</p>
    `,
    author: {
      name: "Fatima Ahmed",
      role: "UX Design Lead"
    },
    category: "Design & UX",
    tags: ["UX Design", "Trust", "Product Design", "Best Practices"],
    publishedAt: "2024-01-10",
    readTime: 5,
    featured: true
  },
  {
    id: "scaling-web-applications",
    slug: "scaling-web-applications",
    title: "Scaling Web Applications: Lessons from the Trenches",
    excerpt: "Practical insights on scaling web applications from thousands to millions of users.",
    content: `
<p>Scaling web applications is one of the most challenging aspects of modern software development. What works for a few thousand users often breaks under real-world load. Here are lessons learned from scaling multiple applications to serve millions of users.</p>

<h2>Database Scaling</h2>
<p>The database is often the first bottleneck. Strategies include:</p>
<ul>
  <li>Read replicas to handle query load</li>
  <li>Caching frequently accessed data</li>
  <li>Database sharding for very large datasets</li>
  <li>Optimizing queries and adding proper indexes</li>
</ul>

<h2>Caching Strategy</h2>
<p>Caching can dramatically improve performance, but it needs to be done thoughtfully:</p>
<ul>
  <li>Cache at multiple levels (CDN, application cache, database cache)</li>
  <li>Implement cache invalidation carefully</li>
  <li>Monitor cache hit rates and adjust strategies</li>
</ul>

<h2>Microservices Considerations</h2>
<p>Microservices can help with scalability, but they add complexity:</p>
<ul>
  <li>Start with a monolith, split only when necessary</li>
  <li>Design service boundaries carefully</li>
  <li>Implement proper observability from day one</li>
  <li>Have strategies for distributed transactions</li>
</ul>

<h2>Monitoring and Observability</h2>
<p>You can't improve what you don't measure:</p>
<ul>
  <li>Implement comprehensive logging</li>
  <li>Track key metrics at multiple levels</li>
  <li>Set up alerts for critical issues</li>
  <li>Regularly review and optimize based on data</li>
</ul>
    `,
    author: {
      name: "Kamal Hossain",
      role: "Engineering Manager"
    },
    category: "Engineering",
    tags: ["Scaling", "Performance", "Architecture", "Best Practices"],
    publishedAt: "2024-01-05",
    readTime: 8,
    featured: false
  },
  {
    id: "design-systems-roi",
    slug: "design-systems-roi",
    title: "The ROI of Design Systems: Beyond Component Libraries",
    excerpt: "Design systems deliver significant returns on investment when implemented strategically.",
    content: `
<p>Design systems are often seen as component libraries, but they're much more. A well-implemented design system is a strategic asset that delivers measurable returns across the organization.</p>

<h2>Direct Cost Savings</h2>
<p>The immediate benefits are visible in development speed:</p>
<ul>
  <li>Faster development cycles with pre-built components</li>
  <li>Reduced QA time due to consistent patterns</li>
  <li>Lower maintenance costs through centralized updates</li>
  <li>Faster onboarding of new designers and developers</li>
</ul>

<h2>Quality Improvements</h2>
<p>Consistency leads to better user experiences:</p>
<ul>
  <li>Unified brand experience across all touchpoints</li>
  <li>Reduced user confusion and errors</li>
  <li>Better accessibility through standardized patterns</li>
  <li>Higher user satisfaction scores</li>
</ul>

<h2>Organizational Benefits</h2>
<p>The ripple effects extend across the organization:</p>
<ul>
  <li>Better collaboration between design and engineering</li>
  <li>Clearer decision-making framework</li>
  <li>Scalable team growth</li>
  <li>Ability to hire for cultural fit over specific component knowledge</li>
</ul>

<h2>Measuring ROI</h2>
<p>Track these metrics to understand your design system's impact:</p>
<ul>
  <li>Development time per feature</li>
  <li>Defect rates</li>
  <li>User satisfaction scores</li>
  <li>Team velocity</li>
  <li>Time to market</li>
</ul>
    `,
    author: {
      name: "Nusrat Jahan",
      role: "Design Systems Lead"
    },
    category: "Design & UX",
    tags: ["Design Systems", "Strategy", "ROI", "Collaboration"],
    publishedAt: "2023-12-28",
    readTime: 7,
    featured: false
  }
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug)
}

export function getInsightById(id: string): Insight | undefined {
  return insights.find((insight) => insight.id === id)
}

export function getFeaturedInsights(): Insight[] {
  return insights.filter((insight) => insight.featured)
}

export function getInsightsByCategory(category: string): Insight[] {
  return insights.filter((insight) => insight.category === category)
}

export function getRecentInsights(limit: number = 10): Insight[] {
  return insights
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

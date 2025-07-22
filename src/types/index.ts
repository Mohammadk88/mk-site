export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  tags: string[]
  category: 'ai' | 'web' | 'mobile' | 'saas'
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  createdAt: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  startingPrice: number
  currency: 'USD' | 'TRY' | 'EUR'
  category: 'tech' | 'saas'
  icon: string
}

export interface PricingTier {
  id: string
  name: string
  description: string
  price: number
  currency: 'USD' | 'TRY' | 'EUR'
  features: string[]
  popular?: boolean
  category: 'website' | 'app' | 'support' | 'saas'
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  tags: string[]
  readingTime: number
  featured: boolean
  slug: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface Contact {
  name: string
  email: string
  subject: string
  message: string
  projectBudget?: string
  timeline?: string
}

export interface Admin {
  cvPassword: string
  lastUpdated: string
}

export type Language = 'en' | 'ar' | 'tr'
export type Theme = 'light' | 'dark'
export type Currency = 'USD' | 'TRY' | 'EUR'

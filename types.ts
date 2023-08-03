export type ImageLoading = 'lazy' | 'eager'
export interface Image {
  src: string
  width?: number
  height?: number
  alt?: string
  loading?: ImageLoading
}

export interface Cost {
  title: string
  description: string
  image: Image
}

export interface Card {
  img: Image
  date?: string
  title: string
  description: string
  linkText: string
}

export interface Step {
  name: string
  icon: Image
  title: string
  description: string
  image: Image
}

interface TestimonialAuthor {
  name: string
  photo: Image
  job: string
  rating: number
}

export interface Testimonial {
  text: string
  author: TestimonialAuthor
}

export interface Payment {
  title: string
  images: Image[]
}

interface PricingFeature {
  text: string
}

export interface PricingPlan {
  title: string
  caption: string
  price: string
  billingDescription: string
  isPopular: boolean
  features: PricingFeature[]
}

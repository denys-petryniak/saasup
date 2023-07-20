interface Image {
  src: string
  alt: string
}

export interface Card {
  img: Image
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

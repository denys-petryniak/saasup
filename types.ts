interface CardImage {
  src: string
  alt: string
}

export interface Card {
  img: CardImage
  title: string
  description: string
  linkText: string
}

export interface Step {
  name: string
  icon: CardImage
  title: string
  description: string
  image: CardImage
}

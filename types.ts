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

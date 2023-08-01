import { ImageField } from '@prismicio/client'

import { CardType } from '../CardContent/card'

export type RegisterCardType = CardType & {
  image: ImageField
}

export type EventCardType = CardType

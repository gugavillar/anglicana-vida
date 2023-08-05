import { ImageField, LinkField } from '@prismicio/client'

import { CardType } from '../CardContent/card'

export type RegisterCardType = CardType & {
  image: ImageField
  inscription_link: LinkField
}

export type EventCardType = CardType

import { KeyTextField } from '@prismicio/client'

import { CardType } from '../CardContent/card'

export type SermonCardType = CardType & {
  series: KeyTextField
}

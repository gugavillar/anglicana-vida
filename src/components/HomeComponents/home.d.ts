import { RichTextField, TitleField } from '@prismicio/client'

export type CommonCardType = {
  type: RichTextField
  name: TitleField
  description: RichTextField
  initial_time: RichTextField
  location: RichTextField
}

export type CellCardType = CommonCardType & {
  week_day: RichTextField
  leader: RichTextField
}

export type RecurrentCardType = CommonCardType & {
  recurrent_day: RichTextField
}

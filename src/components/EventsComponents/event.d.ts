import {
  DateField,
  TitleField,
  RichTextField,
  TimestampField,
  ImageField,
} from '@prismicio/client'

type CardType = {
  date: DateField
  title: TitleField
  description: RichTextField
  initial_date: TimestampField
  final_date: TimestampField
  location: RichTextField
}

export type RegisterCardType = CardType & {
  image: ImageField
}

export type EventCardType = CardType

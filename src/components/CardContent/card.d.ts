import { TitleField, RichTextField, TimestampField } from '@prismicio/client'

export type CardType = {
  title: TitleField
  description: RichTextField
  initial_date: TimestampField
  final_date: TimestampField
  location: RichTextField
}

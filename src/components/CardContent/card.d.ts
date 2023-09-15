import { TitleField, RichTextField, DateField } from '@prismicio/client'

export type CardType = {
  title: TitleField
  description: RichTextField
  initial_date?: DateField
  final_date?: DateField
  location: RichTextField
}

import { ImageField, RichTextField, LinkField } from '@prismicio/client'

export type PeopleCardType = {
  image: ImageField
  heading: RichTextField
  role: RichTextField
  facebook: LinkField
  instagram: LinkField
}

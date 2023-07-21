import { ImageField, RichTextField } from '@prismicio/client'
import { LinkField } from '@prismicio/types'

export type ItemMenu = {
  label: RichTextField
  link: LinkField
}

export type NavbarProps = {
  menuItens: Array<ItemMenu>
  logo: ImageField
}

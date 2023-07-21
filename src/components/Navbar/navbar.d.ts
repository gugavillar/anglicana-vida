import { ImageField } from '@prismicio/client'

import type {
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../../prismicio-types'

export type NavbarProps = {
  menuItens: Array<Simplify<NavbarDocumentDataMenuItensItem>>
  logo: ImageField
}

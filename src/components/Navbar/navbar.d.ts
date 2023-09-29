import type { NavbarDocumentDataMenuItensItem, Simplify } from '@/prismic-types'

export type NavbarProps = {
  menuItens: Array<Simplify<NavbarDocumentDataMenuItensItem>>
}

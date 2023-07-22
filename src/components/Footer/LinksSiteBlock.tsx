import { Itens } from '../Navbar/Itens'

import type {
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../../prismicio-types'

type LinksSiteBlockProps = {
  menuItens: Array<Simplify<NavbarDocumentDataMenuItensItem>>
}

export const LinksSiteBlock = ({ menuItens }: LinksSiteBlockProps) => {
  return <Itens menuItens={menuItens} fontSize="xs" spacing={4} />
}

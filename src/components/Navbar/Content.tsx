import { useBreakpointValue } from '@chakra-ui/react'

import { Itens } from './Itens'
import { Mobile } from './Mobile'
import { NavbarProps } from './navbar'

type ContentProps = {
  menuItens: NavbarProps['menuItens']
}

export const Content = ({ menuItens }: ContentProps) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })
  return isMobile ? (
    <Mobile menuItens={menuItens} />
  ) : (
    <Itens menuItens={menuItens} />
  )
}

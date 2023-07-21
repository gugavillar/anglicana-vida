import { useBreakpointValue } from '@chakra-ui/react'

import { Itens } from './Itens'
import { Mobile } from './Mobile'
import { ItemMenu } from './navbar'

type ContentProps = {
  menuItens: Array<ItemMenu>
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

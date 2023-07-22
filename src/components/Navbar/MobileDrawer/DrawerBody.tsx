import { DrawerBody as ChakraDrawerBody } from '@chakra-ui/react'

import { Itens } from '../Itens'
import { NavbarProps } from '../navbar'

type DrawerBodyProps = {
  menuItens: NavbarProps['menuItens']
}

export const DrawerBody = ({ menuItens }: DrawerBodyProps) => {
  return (
    <ChakraDrawerBody>
      <Itens menuItens={menuItens} spacing={5} />
    </ChakraDrawerBody>
  )
}

import { DrawerBody as ChakraDrawerBody } from '@chakra-ui/react'

import { Itens } from '../Itens'
import { NavbarProps } from '../navbar'

type DrawerBodyProps = {
  menuItens: NavbarProps['menuItens']
  onClose: () => void
}

export const DrawerBody = ({ menuItens, onClose }: DrawerBodyProps) => {
  return (
    <ChakraDrawerBody>
      <Itens onClose={onClose} menuItens={menuItens} spacing={5} />
    </ChakraDrawerBody>
  )
}

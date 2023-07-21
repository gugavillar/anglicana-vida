import { DrawerBody as ChakraDrawerBody, VStack } from '@chakra-ui/react'

import { Itens } from '../Itens'
import { NavbarProps } from '../navbar'

type DrawerBodyProps = {
  menuItens: NavbarProps['menuItens']
}

export const DrawerBody = ({ menuItens }: DrawerBodyProps) => {
  return (
    <ChakraDrawerBody>
      <VStack align="left">
        <Itens menuItens={menuItens} />
      </VStack>
    </ChakraDrawerBody>
  )
}

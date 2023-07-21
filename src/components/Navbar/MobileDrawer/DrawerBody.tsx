import { DrawerBody as ChakraDrawerBody, VStack } from '@chakra-ui/react'

import { Itens } from '../Itens'
import { ItemMenu } from '../navbar'

type DrawerBodyProps = {
  menuItens: Array<ItemMenu>
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

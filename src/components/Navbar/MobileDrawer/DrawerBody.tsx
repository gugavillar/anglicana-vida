import { DrawerBody as ChakraDrawerBody } from '@chakra-ui/react'

import { DonationButton } from '@/components/DonationButton'

import { Itens } from '../Itens'
import { NavbarProps } from '../navbar'

type DrawerBodyProps = {
  menuItens: NavbarProps['menuItens']
  onClose: () => void
}

export const DrawerBody = ({ menuItens, onClose }: DrawerBodyProps) => {
  return (
    <ChakraDrawerBody display="flex" flexDirection="column" pb={6}>
      <Itens onClose={onClose} menuItens={menuItens} spacing={5} />
      <DonationButton
        mt="auto"
        display={{ base: 'inline-flex', md: 'inline-flex', lg: 'none' }}
      />
    </ChakraDrawerBody>
  )
}

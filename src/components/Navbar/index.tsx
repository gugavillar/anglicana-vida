import { Box } from '@chakra-ui/react'

import { NavbarProps } from './navbar'
import { Wrapper } from './Wrapper'

export const Navbar = ({ menuItens, logo }: NavbarProps) => {
  return (
    <Box as="header" minH={20} px={6} bg="gray.700" position="sticky" top={0}>
      <Wrapper menuItens={menuItens} logo={logo} />
    </Box>
  )
}

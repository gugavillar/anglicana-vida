import { Box } from '@chakra-ui/react'

import { Content } from './Content'
import { NavbarProps } from './navbar'

export const Navbar = ({ menuItens, logo }: NavbarProps) => {
  return (
    <Box
      as="header"
      h={20}
      px={4}
      bg="gray.700"
      position="sticky"
      top={0}
      mb={4}
    >
      <Content menuItens={menuItens} logo={logo} />
    </Box>
  )
}

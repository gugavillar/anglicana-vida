import { memo } from 'react'

import { Box } from '@chakra-ui/react'

import { NavbarProps } from './navbar'
import { Wrapper } from './Wrapper'

export const Navbar = memo(({ menuItens }: NavbarProps) => {
  return (
    <Box
      as="header"
      minH={20}
      px={6}
      bg="gray.700"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Wrapper menuItens={menuItens} />
    </Box>
  )
})

Navbar.displayName = 'Navbar'

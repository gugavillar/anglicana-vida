import { ReactNode } from 'react'

import { GroupField, ImageField } from '@prismicio/client'

import { Box } from '@chakra-ui/react'

import { Navbar } from '../Navbar'

import type {
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../../prismicio-types'

type ContainerProps = {
  children: ReactNode
  menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
  logo: ImageField
}

export const Container = ({ children, menuItens, logo }: ContainerProps) => {
  return (
    <Box w="full" h="100vh">
      <Navbar menuItens={menuItens} logo={logo} />
      {children}
    </Box>
  )
}

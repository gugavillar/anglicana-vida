import { PrismicNextImage } from '@prismicio/next'

import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Itens } from './Itens'
import { Mobile } from './Mobile'
import { NavbarProps } from './navbar'

type ContentProps = NavbarProps

export const Content = ({ logo, menuItens }: ContentProps) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })
  return (
    <Flex
      align="center"
      gap={8}
      as="nav"
      h="full"
      maxW="75rem"
      mx="auto"
      {...(isMobile && { justify: 'space-between' })}
    >
      <PrismicNextImage field={logo} />
      {isMobile ? (
        <Mobile menuItens={menuItens} />
      ) : (
        <Itens menuItens={menuItens} />
      )}
    </Flex>
  )
}

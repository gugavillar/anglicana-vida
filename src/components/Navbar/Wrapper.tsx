import { PrismicNextImage } from '@prismicio/next'

import { Flex } from '@chakra-ui/react'

import { Content } from './Content'
import { NavbarProps } from './navbar'

type WrapperProps = NavbarProps

export const Wrapper = ({ logo, menuItens }: WrapperProps) => {
  return (
    <Flex
      align="center"
      gap={8}
      as="nav"
      h="full"
      maxW="75rem"
      mx="auto"
      justify={{ base: 'space-between', md: 'flex-start', lg: 'flex-start' }}
    >
      <PrismicNextImage field={logo} />
      <Content menuItens={menuItens} />
    </Flex>
  )
}

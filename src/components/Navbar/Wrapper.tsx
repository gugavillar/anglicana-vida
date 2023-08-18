import { Flex } from '@chakra-ui/react'

import { Content } from './Content'
import { NavbarProps } from './navbar'
import { Logo } from '../Icons/Logo'

type WrapperProps = NavbarProps

export const Wrapper = ({ menuItens }: WrapperProps) => {
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
      <Flex h={20} align="center" justify="center">
        <Logo />
      </Flex>
      <Content menuItens={menuItens} />
    </Flex>
  )
}

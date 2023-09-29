import { Flex } from '@chakra-ui/react'

import { Logo } from '@/components/Icons'

import { Content } from './Content'
import { NavbarProps } from './navbar'

type WrapperProps = NavbarProps

export const Wrapper = ({ menuItens }: WrapperProps) => {
  return (
    <Flex
      align="center"
      as="nav"
      maxW="75rem"
      mx="auto"
      gap={8}
      justify={{ base: 'space-between', md: 'flex-start', lg: 'flex-start' }}
    >
      <Flex h={20} align="center" justify="center">
        <Logo />
      </Flex>
      <Content menuItens={menuItens} />
    </Flex>
  )
}

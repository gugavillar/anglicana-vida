import { Flex } from '@chakra-ui/react'

import { Logo } from '@/components/Icons'

import { Itens } from './Itens'
import { Mobile } from './Mobile'
import { NavbarProps } from './navbar'
import { useNavbar } from './useNavbar'

type WrapperProps = NavbarProps

export const Wrapper = ({ menuItens }: WrapperProps) => {
  const { handleNavigationToHome, isMobile } = useNavbar()

  if (typeof isMobile !== 'boolean') return null

  return (
    <Flex
      align="center"
      as="nav"
      maxW="75rem"
      mx="auto"
      gap={8}
      justify={{ base: 'space-between', md: 'flex-start', lg: 'flex-start' }}
    >
      <Flex
        h={20}
        align="center"
        justify="center"
        {...(isMobile && { cursor: 'pointer' })}
      >
        <Logo {...(isMobile && { onClick: handleNavigationToHome })} />
      </Flex>
      {isMobile ? (
        <Mobile menuItens={menuItens} />
      ) : (
        <Itens menuItens={menuItens} direction="row" spacing={9} />
      )}
    </Flex>
  )
}

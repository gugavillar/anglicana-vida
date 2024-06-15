import { Flex } from '@chakra-ui/react'

import { Logo } from '@/components/Icons'

import { Itens } from './Itens'
import { Mobile } from './Mobile'
import { NavbarProps } from './navbar'
import { useNavbar } from './useNavbar'
import { DonationButton } from '../DonationButton'

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
      justify="space-between"
    >
      <Flex
        h={20}
        w={{ base: 'full', md: 'full', lg: 'auto' }}
        px={2}
        align="center"
        justify={{ base: 'space-between', md: 'space-between', lg: 'center' }}
        gap={12}
        {...(isMobile && { cursor: 'pointer' })}
      >
        <Logo {...(isMobile && { onClick: handleNavigationToHome })} />
        {isMobile ? (
          <Mobile menuItens={menuItens} />
        ) : (
          <Itens menuItens={menuItens} direction="row" spacing={9} />
        )}
      </Flex>
      <DonationButton
        display={{ base: 'none', md: 'none', lg: 'inline-flex' }}
      />
    </Flex>
  )
}

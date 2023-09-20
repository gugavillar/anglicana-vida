import { Flex } from '@chakra-ui/react'

import { Footer, Navbar } from '@/components'

import { RootLayoutProps } from './container'

export const RootLayout = ({
  children,
  menuItens,
  siteInfo,
  socialMedia,
  recommendation,
}: RootLayoutProps) => {
  return (
    <Flex direction="column" w="full" minH="100vh">
      <Navbar menuItens={menuItens} />
      <Flex direction="column" flex={1} as="main">
        {children}
      </Flex>
      <Footer
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        recommendation={recommendation}
      />
    </Flex>
  )
}

import { Flex } from '@chakra-ui/react'

import { Footer, Navbar, PageLoader } from '@/components'

import { useNavigationLoad } from '@/hooks'

import { RootLayoutProps } from './container'
import { useRootProps } from './useRootProps'

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { isNavigation } = useNavigationLoad()
  const { navbarAndFooterProps } = useRootProps()

  return (
    <Flex direction="column" w="full" minH="100vh">
      <Navbar menuItens={navbarAndFooterProps?.navbar?.menuItens} />
      <Flex direction="column" flex={1} as="main">
        {isNavigation ? <PageLoader /> : children}
      </Flex>
      <Footer
        siteInfo={navbarAndFooterProps?.footer?.siteInfo}
        socialMedia={navbarAndFooterProps?.footer?.socialMedia}
        recommendation={navbarAndFooterProps?.footer?.recommendation}
      />
    </Flex>
  )
}

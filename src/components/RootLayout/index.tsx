import { Flex } from '@chakra-ui/react'

import { Footer, Navbar, PageLoader } from '@/components'

import { useNavigationLoad } from '@/hooks'

import { RootLayoutProps } from './container'

export const RootLayout = ({
  children,
  menuItens,
  siteInfo,
  socialMedia,
  recommendation,
}: RootLayoutProps) => {
  const { isNavigation } = useNavigationLoad()

  return (
    <Flex direction="column" w="full" minH="100vh">
      <Navbar menuItens={menuItens} />
      {isNavigation ? (
        <PageLoader />
      ) : (
        <>
          <Flex direction="column" flex={1} as="main">
            {children}
          </Flex>
          <Footer
            siteInfo={siteInfo}
            socialMedia={socialMedia}
            recommendation={recommendation}
          />
        </>
      )}
    </Flex>
  )
}

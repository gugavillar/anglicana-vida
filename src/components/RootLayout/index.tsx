import { useEffect } from 'react'

import { Flex } from '@chakra-ui/react'

import { clarity } from 'react-microsoft-clarity'

import { Footer, Navbar, PageLoader, WhatsappButton } from '@/components'

import { useNavigationLoad } from '@/hooks'

import { RootLayoutProps } from './container'
import { useRootProps } from './useRootProps'

export const RootLayout = ({ children, isDevelopment }: RootLayoutProps) => {
  const { isNavigation } = useNavigationLoad()
  const { menuItens, recommendation, siteInfo, socialMedia, whatsapp } =
    useRootProps()

  useEffect(() => {
    if (!isDevelopment) {
      clarity.init('nc3dhidq1p')
    }
  }, [isDevelopment])

  return (
    <Flex direction="column" w="full" minH="100vh" position="relative">
      <Navbar menuItens={menuItens} />
      <Flex direction="column" flex={1} as="main" position="relative">
        {isNavigation ? <PageLoader /> : children}
        <WhatsappButton number={whatsapp?.number} message={whatsapp?.message} />
      </Flex>
      <Footer
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        recommendation={recommendation}
      />
    </Flex>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */

import { useMemo } from 'react'

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
  const memoNavbarMenuItens = useMemo(
    () => menuItens,
    [JSON.stringify(menuItens)],
  )
  const memoFooterProps = useMemo(() => {
    return {
      siteInfo,
      socialMedia,
      recommendation,
    }
  }, [
    JSON.stringify(recommendation),
    JSON.stringify(siteInfo),
    JSON.stringify(socialMedia),
  ])
  return (
    <Flex direction="column" w="full" minH="100vh">
      <Navbar menuItens={memoNavbarMenuItens} />
      <Flex direction="column" flex={1} as="main">
        {isNavigation ? <PageLoader /> : children}
      </Flex>
      <Footer
        siteInfo={memoFooterProps?.siteInfo}
        socialMedia={memoFooterProps?.socialMedia}
        recommendation={memoFooterProps?.recommendation}
      />
    </Flex>
  )
}

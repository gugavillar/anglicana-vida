import { useEffect, useState } from 'react'

import {
  FooterDocumentDataRecommendationItem,
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  type Simplify,
} from '@/prismic-types'
import { GroupField } from '@prismicio/client'

import { Flex } from '@chakra-ui/react'

import { Footer, Navbar, PageLoader } from '@/components'

import { getSettings } from '@/helpers'
import { useNavigationLoad } from '@/hooks'

import { RootLayoutProps } from './container'

type NavbarAndFooterPropsType = {
  navbar: {
    menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
  }
  footer: {
    siteInfo: GroupField<Simplify<FooterDocumentDataSiteInfoItem>>
    socialMedia: GroupField<Simplify<FooterDocumentDataSocialMediaItem>>
    recommendation: GroupField<Simplify<FooterDocumentDataRecommendationItem>>
  }
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { isNavigation } = useNavigationLoad()
  const [navbarAndFooterProps, setNavbarAndFooterProps] =
    useState<NavbarAndFooterPropsType>()

  useEffect(() => {
    const loadData = async () => {
      const { footer, navbar } = await getSettings()
      const response = {
        navbar: {
          menuItens: navbar.data.menu_itens,
        },
        footer: {
          siteInfo: footer.data.site_info,
          socialMedia: footer.data.social_media,
          recommendation: footer.data.recommendation,
        },
      }
      setNavbarAndFooterProps(response)
    }

    loadData()
  }, [])

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

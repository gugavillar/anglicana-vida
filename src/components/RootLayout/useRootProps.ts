import { useEffect, useState } from 'react'

import {
  FooterDocumentDataRecommendationItem,
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  type Simplify,
} from '@/prismic-types'
import { GroupField } from '@prismicio/client'

import { getSettings } from '@/helpers'

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

export const useRootProps = () => {
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

  return { navbarAndFooterProps }
}

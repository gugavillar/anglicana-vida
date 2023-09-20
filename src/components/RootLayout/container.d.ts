import { ReactNode } from 'react'

import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  FooterDocumentDataRecommendationItem,
  Simplify,
} from '../../../prismicio-types'

export type RootLayoutProps = {
  children: ReactNode
  menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
  siteInfo: GroupField<Simplify<FooterDocumentDataSiteInfoItem>>
  socialMedia: GroupField<Simplify<FooterDocumentDataSocialMediaItem>>
  recommendation: GroupField<Simplify<FooterDocumentDataRecommendationItem>>
}

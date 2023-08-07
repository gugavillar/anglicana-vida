import { ReactNode } from 'react'

import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  FooterDocumentDataRecommendationItem,
  Simplify,
} from '../../../prismicio-types'

export type ContainerProps = {
  children: ReactNode
  menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
  logo: ImageField
  siteInfo: GroupField<Simplify<FooterDocumentDataSiteInfoItem>>
  socialMedia: GroupField<Simplify<FooterDocumentDataSocialMediaItem>>
  recommendation: GroupField<Simplify<FooterDocumentDataRecommendationItem>>
}

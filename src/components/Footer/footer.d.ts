import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  FooterDocumentDataRecommendationItem,
  Simplify,
} from '@/prismic-types'

export type FooterProps = {
  siteInfo: Array<Simplify<FooterDocumentDataSiteInfoItem>>
  socialMedia: Array<Simplify<FooterDocumentDataSocialMediaItem>>
  recommendation: Array<Simplify<FooterDocumentDataRecommendationItem>>
}

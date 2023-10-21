import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  FooterDocumentDataRecommendationItem,
  Simplify,
} from '@/prismic-types'

export type FooterProps = {
  siteInfo: Array<Simplify<FooterDocumentDataSiteInfoItem>> | undefined
  socialMedia: Array<Simplify<FooterDocumentDataSocialMediaItem>> | undefined
  recommendation:
    | Array<Simplify<FooterDocumentDataRecommendationItem>>
    | undefined
}

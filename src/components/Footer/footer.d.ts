import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../../prismicio-types'

export type FooterProps = {
  siteInfo: Array<Simplify<FooterDocumentDataSiteInfoItem>>
  socialMedia: Array<Simplify<FooterDocumentDataSocialMediaItem>>
  menuItens: Array<Simplify<NavbarDocumentDataMenuItensItem>>
}

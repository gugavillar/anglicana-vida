import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { GroupField } from '@prismicio/client'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { RootLayout } from '@/components'

import { getFooter, getNavbar } from '@/helpers'
import { theme } from '@/theme'

import type {
  FooterDocumentDataRecommendationItem,
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../prismicio-types'

interface InitialProps extends AppProps {
  navbar: {
    menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
  }
  footer: {
    siteInfo: GroupField<Simplify<FooterDocumentDataSiteInfoItem>>
    socialMedia: GroupField<Simplify<FooterDocumentDataSocialMediaItem>>
    recommendation: GroupField<Simplify<FooterDocumentDataRecommendationItem>>
  }
}

App.getInitialProps = async ({ previewData }: GetStaticPropsContext) => {
  const [
    {
      data: { menu_itens: menuItens },
    },
    {
      data: { site_info: siteInfo, social_media: socialMedia, recommendation },
    },
  ] = await Promise.all([
    getNavbar({ previewData }),
    getFooter({ previewData }),
  ])
  return {
    navbar: {
      menuItens,
    },
    footer: {
      siteInfo,
      socialMedia,
      recommendation,
    },
  }
}

export default function App({
  Component,
  pageProps,
  navbar,
  footer,
}: InitialProps) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout
        menuItens={navbar?.menuItens}
        siteInfo={footer?.siteInfo}
        socialMedia={footer?.socialMedia}
        recommendation={footer?.recommendation}
      >
        <Component {...pageProps} />
      </RootLayout>
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

import { AppProps } from 'next/app'

import type {
  FooterDocumentDataRecommendationItem,
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '@/prismic-types'
import { repositoryName } from '@/prismicio'
import { GroupField } from '@prismicio/client'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { RootLayout } from '@/components'

import { getSettings } from '@/helpers'
import { theme } from '@/theme'

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

App.getInitialProps = async () => {
  const { footer, navbar } = await getSettings()
  return {
    navbar: {
      menuItens: navbar.data.menu_itens,
    },
    footer: {
      siteInfo: footer.data.site_info,
      socialMedia: footer.data.social_media,
      recommendation: footer.data.recommendation,
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

import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { GroupField, ImageField } from '@prismicio/client'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { Container } from '@/components/Container'

import { getFooter, getNavbar } from '@/helpers'
import { theme } from '@/theme'

import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../prismicio-types'

interface InitialProps extends AppProps {
  navbar: {
    menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
    logo: ImageField
  }
  footer: {
    siteInfo: GroupField<Simplify<FooterDocumentDataSiteInfoItem>>
    socialMedia: GroupField<Simplify<FooterDocumentDataSocialMediaItem>>
  }
}

App.getInitialProps = async ({ previewData }: GetStaticPropsContext) => {
  const [
    {
      data: { menu_itens: menuItens, logo },
    },
    {
      data: { site_info: siteInfo, social_media: socialMedia },
    },
  ] = await Promise.all([
    getNavbar({ previewData }),
    getFooter({ previewData }),
  ])
  return {
    navbar: {
      menuItens,
      logo,
    },
    footer: {
      siteInfo,
      socialMedia,
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
      <Container
        menuItens={navbar?.menuItens}
        logo={navbar?.logo}
        siteInfo={footer?.siteInfo}
        socialMedia={footer?.socialMedia}
      >
        <Component {...pageProps} />
      </Container>
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

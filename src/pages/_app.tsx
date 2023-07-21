import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { GroupField, ImageField } from '@prismicio/client'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { Container } from '@/components/Container'

import { getNavbar } from '@/helpers/getNavbar'

import type {
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../prismicio-types'

interface InitialProps extends AppProps {
  navbar: {
    menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
    logo: ImageField
  }
}

App.getInitialProps = async ({ previewData }: GetStaticPropsContext) => {
  const {
    data: { menu_itens: menuItens, logo },
  } = await getNavbar({ previewData })
  return {
    navbar: {
      menuItens,
      logo,
    },
  }
}

export default function App({ Component, pageProps, navbar }: InitialProps) {
  return (
    <ChakraProvider>
      <Container menuItens={navbar?.menuItens} logo={navbar?.logo}>
        <Component {...pageProps} />
      </Container>
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

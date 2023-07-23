import { ReactNode } from 'react'

import { GroupField, ImageField } from '@prismicio/client'

import { Flex } from '@chakra-ui/react'

import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

import type {
  FooterDocumentDataSiteInfoItem,
  FooterDocumentDataSocialMediaItem,
  NavbarDocumentDataMenuItensItem,
  Simplify,
} from '../../../prismicio-types'

type ContainerProps = {
  children: ReactNode
  menuItens: GroupField<Simplify<NavbarDocumentDataMenuItensItem>>
  logo: ImageField
  siteInfo: GroupField<Simplify<FooterDocumentDataSiteInfoItem>>
  socialMedia: GroupField<Simplify<FooterDocumentDataSocialMediaItem>>
}

export const Container = ({
  children,
  menuItens,
  logo,
  siteInfo,
  socialMedia,
}: ContainerProps) => {
  return (
    <Flex direction="column" w="full" minH="100vh">
      <Navbar menuItens={menuItens} logo={logo} />
      <Flex direction="column" flex={1} as="main">
        {children}
      </Flex>
      <Footer
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        menuItens={menuItens}
      />
    </Flex>
  )
}

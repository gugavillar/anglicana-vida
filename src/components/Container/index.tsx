import { ReactNode } from 'react'

import { GroupField, ImageField } from '@prismicio/client'

import { Box } from '@chakra-ui/react'

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
    <Box w="full" h="100vh">
      <Navbar menuItens={menuItens} logo={logo} />
      <Box mx="auto" maxW="75rem" p={6}>
        {children}
      </Box>
      <Footer
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        menuItens={menuItens}
      />
    </Box>
  )
}

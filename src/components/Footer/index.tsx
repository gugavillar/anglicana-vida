import { Box } from '@chakra-ui/react'

import { FooterProps } from './footer'
import { Wrapper } from './Wrapper'

export const Footer = ({ siteInfo, socialMedia, menuItens }: FooterProps) => {
  return (
    <Box
      as="footer"
      mt="16px"
      position="absolute"
      bottom={0}
      width="full"
      height="fit-content"
      p={6}
      bg="gray.700"
    >
      <Wrapper
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        menuItens={menuItens}
      />
    </Box>
  )
}
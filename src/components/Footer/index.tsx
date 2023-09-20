import { Box } from '@chakra-ui/react'

import { FooterProps } from './footer'
import { Wrapper } from './Wrapper'

export const Footer = ({
  siteInfo,
  socialMedia,
  recommendation,
}: FooterProps) => {
  return (
    <Box
      as="footer"
      mt={12}
      width="full"
      minH="fit-content"
      p={6}
      bg="gray.700"
    >
      <Wrapper
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        recommendation={recommendation}
      />
    </Box>
  )
}

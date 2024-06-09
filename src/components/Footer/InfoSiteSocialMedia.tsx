import { Fragment } from 'react'

import { PrismicNextLink } from '@prismicio/next'

import { Flex, Box, Text, Icon } from '@chakra-ui/react'

import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react'

import { FooterProps } from './footer'

type InfoSiteSocialMediaProps = {
  socialMedia: FooterProps['socialMedia']
}

export const InfoSiteSocialMedia = ({
  socialMedia,
}: InfoSiteSocialMediaProps) => {
  const iconProps = {
    width: 8,
    height: 8,
    color: 'white',
    _hover: { color: 'flesh.200', transition: 'color 0.3s' },
  }
  return (
    <Box width={{ base: 'full', md: '18rem', lg: '18rem' }}>
      <Text fontSize="md" color="white" mb={5}>
        Siga-nos
      </Text>
      <Flex gap={5}>
        {socialMedia?.map((media, index) => (
          <Fragment key={index}>
            <PrismicNextLink
              field={media.instagram}
              target="_blank"
              title="Instagram"
            >
              <Icon as={InstagramLogo} {...iconProps} />
            </PrismicNextLink>
            <PrismicNextLink
              field={media.facebook}
              target="_blank"
              title="Facebook"
            >
              <Icon as={FacebookLogo} {...iconProps} />
            </PrismicNextLink>
            <PrismicNextLink
              field={media.youtube}
              target="_blank"
              title="Youtube"
            >
              <Icon as={YoutubeLogo} {...iconProps} />
            </PrismicNextLink>
          </Fragment>
        ))}
      </Flex>
    </Box>
  )
}

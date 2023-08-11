import { Fragment } from 'react'

import { PrismicNextLink } from '@prismicio/next'

import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'

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
    <Box>
      <Text
        fontSize="md"
        color="white"
        fontFamily={roboto?.style?.fontFamily}
        mb={5}
      >
        Siga-nos
      </Text>
      <Flex gap={5}>
        {socialMedia?.map((media, index) => (
          <Fragment key={index}>
            <PrismicNextLink field={media.instagram} target="_blank">
              <Icon as={InstagramLogo} {...iconProps} />
            </PrismicNextLink>
            <PrismicNextLink field={media.facebook} target="_blank">
              <Icon as={FacebookLogo} {...iconProps} />
            </PrismicNextLink>
            <PrismicNextLink field={media.youtube} target="_blank">
              <Icon as={YoutubeLogo} {...iconProps} />
            </PrismicNextLink>
          </Fragment>
        ))}
      </Flex>
    </Box>
  )
}

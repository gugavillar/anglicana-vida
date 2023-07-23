import { Fragment } from 'react'

import { PrismicNextLink } from '@prismicio/next'

import { Flex, Box, Text } from '@chakra-ui/react'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'

import { FooterProps } from './footer'

type InfoSiteSocialMediaProps = {
  socialMedia: FooterProps['socialMedia']
}

export const InfoSiteSocialMedia = ({
  socialMedia,
}: InfoSiteSocialMediaProps) => {
  return (
    <Box>
      <Text
        fontSize="md"
        color="white"
        fontFamily={roboto?.style?.fontFamily}
        mb={5}
      >
        Connect
      </Text>
      <Flex gap={5}>
        {socialMedia?.map((media, index) => (
          <Fragment key={index}>
            <PrismicNextLink field={media.instagram}>
              <InstagramLogo width={24} height={24} color="white" />
            </PrismicNextLink>
            <PrismicNextLink field={media.facebook}>
              <FacebookLogo width={24} height={24} color="white" />
            </PrismicNextLink>
          </Fragment>
        ))}
      </Flex>
    </Box>
  )
}

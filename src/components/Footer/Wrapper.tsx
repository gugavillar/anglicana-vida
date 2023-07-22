import { Flex, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { FooterProps } from './footer'
import { InfoSiteBlock } from './InfoSiteBlock'
import { InfoSiteSocialMedia } from './InfoSiteSocialMedia'
import { LinksSiteBlock } from './LinksSiteBlock'

type WrapperProps = FooterProps

export const Wrapper = ({ siteInfo, socialMedia, menuItens }: WrapperProps) => {
  const year = new Date().getFullYear()
  return (
    <Flex
      maxW="75rem"
      width="full"
      mx="auto"
      direction="column"
      height="full"
      justify="center"
      p={4}
    >
      <Text
        color="whiteAlpha.700"
        mb={8}
        fontFamily={roboto.style.fontFamily}
        fontSize="xs"
      >
        © COPYRIGHT {year}
      </Text>
      <Flex
        flexWrap="wrap"
        maxW="37.5rem"
        width="full"
        align="center"
        justify="space-between"
      >
        <InfoSiteBlock siteInfo={siteInfo} />
        <LinksSiteBlock menuItens={menuItens} />
        <InfoSiteSocialMedia socialMedia={socialMedia} />
      </Flex>
    </Flex>
  )
}

import { Flex, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { FooterProps } from './footer'
import { InfoSiteBlock } from './InfoSiteBlock'
import { InfoSiteSocialMedia } from './InfoSiteSocialMedia'
import { LinksSiteBlock } from './LinksSiteBlock'

type WrapperProps = FooterProps

export const Wrapper = ({
  siteInfo,
  socialMedia,
  recommendation,
}: WrapperProps) => {
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
        color="white"
        mb={8}
        fontFamily={roboto.style.fontFamily}
        fontSize="xs"
      >
        © Copyright {year}
      </Text>
      <Flex
        flexWrap="wrap"
        maxW="50rem"
        width="full"
        align="flex-start"
        gap={8}
      >
        <InfoSiteBlock siteInfo={siteInfo} />
        <LinksSiteBlock recommendation={recommendation} />
        <InfoSiteSocialMedia socialMedia={socialMedia} />
      </Flex>
    </Flex>
  )
}

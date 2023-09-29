import { Flex, Text, Icon } from '@chakra-ui/react'

import { Copyright } from 'phosphor-react'

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
      pb={0}
    >
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
      <Flex align="center" gap={2} mt={6} color="white">
        <Icon as={Copyright} size={4} />
        <Text fontSize="xs" verticalAlign="center">
          Copyright {year}
        </Text>
      </Flex>
    </Flex>
  )
}

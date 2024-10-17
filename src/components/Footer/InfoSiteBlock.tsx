import { Fragment } from 'react'

import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { type JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Link, Flex, Icon } from '@chakra-ui/react'

import { Envelope, MapPin } from 'phosphor-react'

import { FooterProps } from './footer'

type InfoSiteBlockProps = {
  siteInfo: FooterProps['siteInfo']
}

const componentLinkMap: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Flex
      align="center"
      gap={2}
      _hover={{ color: 'flesh.200', transition: 'color 0.3s' }}
    >
      <Icon as={MapPin} width={6} height={6} />
      {children}
    </Flex>
  ),
}

const componentLinkMail: JSXMapSerializer = {
  paragraph: ({ children, text }) => (
    <Flex
      align="center"
      gap={2}
      _hover={{ color: 'flesh.200', transition: 'color 0.3s' }}
    >
      <Icon as={Envelope} width={6} height={6} />
      <Link
        _hover={{ textDecoration: 'none' }}
        target="_blank"
        href={`mailto:${text}?subject=Dúvidas ou Informações`}
      >
        {children}
      </Link>
    </Flex>
  ),
}

export const InfoSiteBlock = ({ siteInfo }: InfoSiteBlockProps) => {
  return (
    <VStack
      spacing={4}
      align="left"
      fontSize="md"
      color="white"
      width={{ base: 'full', md: '18rem', lg: '18rem' }}
      flexDirection="column"
    >
      {siteInfo?.map((info, index) => (
        <Fragment key={index}>
          <PrismicRichText field={info.schedules} />
          <VStack align="flex-start" spacing={4}>
            <PrismicNextLink field={info.link_driving}>
              <PrismicRichText
                components={componentLinkMap}
                field={info.address}
              />
            </PrismicNextLink>
            <PrismicRichText components={componentLinkMail} field={info.mail} />
          </VStack>
          <PrismicNextImage
            field={info.logo_anglicana}
            style={{ width: '80%' }}
          />
        </Fragment>
      ))}
    </VStack>
  )
}

import { Fragment } from 'react'

import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Image, VStack, Link } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { FooterProps } from './footer'

type InfoSiteBlockProps = {
  siteInfo: FooterProps['siteInfo']
}

const componentLinkMap: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Link
      target="_blank"
      href="https://www.google.com/maps/dir/?api=1&destination=igreja+anglicana+vida&travelmode=driving"
    >
      {children}
    </Link>
  ),
}

const componentLinkMail: JSXMapSerializer = {
  paragraph: ({ children, text }) => (
    <Link
      target="_blank"
      href={`mailto:${text}?subject=Dúvidas ou Informações`}
    >
      {children}
    </Link>
  ),
}

export const InfoSiteBlock = ({ siteInfo }: InfoSiteBlockProps) => {
  return (
    <VStack
      spacing={4}
      align="left"
      fontSize="xs"
      color="white"
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      width="15rem"
      flexDirection={{ base: 'column-reverse', md: 'column', lg: 'column' }}
    >
      {siteInfo?.map((info, index) => (
        <Fragment key={index}>
          <PrismicRichText field={info.schedules} />
          <PrismicRichText components={componentLinkMap} field={info.address} />
          <PrismicRichText components={componentLinkMail} field={info.mail} />
          <Image
            maxWidth="80%"
            src={info?.logo_anglicana?.url as string}
            alt={info?.logo_anglicana?.alt as string}
          />
        </Fragment>
      ))}
    </VStack>
  )
}

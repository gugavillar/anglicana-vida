import { Fragment } from 'react'

import { PrismicRichText } from '@prismicio/react'

import { VStack } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { FooterProps } from './footer'

type InfoSiteBlockProps = {
  siteInfo: FooterProps['siteInfo']
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
    >
      {siteInfo?.map((info, index) => (
        <Fragment key={index}>
          <PrismicRichText field={info.phone} />
          <PrismicRichText field={info.address} />
          <PrismicRichText field={info.mail} />
        </Fragment>
      ))}
    </VStack>
  )
}

import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Heading, VStack, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

type ContentInfoProps = {
  item: Simplify<Content.InfoContentSlice>['items'][number]
}

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      as="h4"
      textTransform="uppercase"
      fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const labelComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Text>
  ),
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      lineHeight="24px"
      color="cinder.950"
      fontWeight={400}
      fontFamily={roboto?.style?.fontFamily}
    >
      {children}
    </Text>
  ),
}

export const ContentInfo = ({
  item: { label, description, heading },
}: ContentInfoProps) => {
  return (
    <VStack spacing={4} align="flex-start" minWidth="50%">
      <PrismicRichText components={labelComponent} field={label} />
      <PrismicRichText components={headingComponent} field={heading} />
      <PrismicRichText components={descriptionComponent} field={description} />
    </VStack>
  )
}

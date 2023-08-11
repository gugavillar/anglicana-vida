import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Heading, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

const titleComponent: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h1"
      fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="white"
    >
      {children}
    </Heading>
  ),
}

const labelComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
      color="flesh.200"
    >
      {children}
    </Text>
  ),
}

type BoxWithTextProps = {
  primary: Simplify<Content.HeaderImageSliceDefault>['primary']
}

export const BoxWithText = ({
  primary: { label, title },
}: BoxWithTextProps) => (
  <VStack
    align="flex-start"
    position="absolute"
    px={{ base: 6, md: 28, lg: 28 }}
    spacing={4}
  >
    <PrismicRichText components={labelComponent} field={label} />
    <PrismicRichText components={titleComponent} field={title} />
  </VStack>
)

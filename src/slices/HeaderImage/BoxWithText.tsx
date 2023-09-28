import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Heading } from '@chakra-ui/react'

import type { Simplify } from '../../../prismicio-types'

const titleComponent: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      variant="title"
      fontWeight={700}
      color="white"
      textShadow="3px 3px 0 #000"
    >
      {children}
    </Heading>
  ),
}

const labelComponent: JSXMapSerializer = {
  heading6: ({ children }) => (
    <Heading
      as="h6"
      variant="subTitle"
      fontWeight={400}
      color="white"
      textShadow="2px 2px 0 #000"
    >
      {children}
    </Heading>
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

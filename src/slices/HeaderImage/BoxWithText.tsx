import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Box, Heading, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

const titleComponent: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h1"
      textTransform="uppercase"
      fontSize={{ base: 'xl', md: '5xl', lg: '5xl' }}
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
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      mb={4}
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
  <Box
    position="absolute"
    color="whiteAlpha.700"
    px={{ base: 6, md: 28, lg: 28 }}
  >
    <PrismicRichText components={labelComponent} field={label} />
    <PrismicRichText components={titleComponent} field={title} />
  </Box>
)

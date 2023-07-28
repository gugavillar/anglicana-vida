import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Box, Text, Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

type ContentTextProps = {
  item: Simplify<Content.ContentWithImageSlice>['items'][number]
}

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      as="h4"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      lineHeight="44px"
      textTransform="uppercase"
      fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
      mb={4}
    >
      {children}
    </Heading>
  ),
}

const contentComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      lineHeight="24px"
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      fontWeight={400}
      fontFamily={roboto?.style?.fontFamily}
    >
      {children}
    </Text>
  ),
}

export const ContentText = ({
  item: { heading, content },
}: ContentTextProps) => {
  return (
    <Box>
      <PrismicRichText components={headingComponent} field={heading} />
      <PrismicRichText components={contentComponent} field={content} />
    </Box>
  )
}

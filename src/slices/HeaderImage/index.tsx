import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

export type HeaderImageProps = SliceComponentProps<Content.HeaderImageSlice>

const title: JSXMapSerializer = {
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

const label: JSXMapSerializer = {
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

const HeaderImage = ({ slice }: HeaderImageProps): JSX.Element => {
  return (
    <Flex as="section" maxH="30rem" align="center" justify="flex-start">
      <Box
        position="absolute"
        color="whiteAlpha.700"
        px={{ base: 6, md: 28, lg: 28 }}
      >
        <PrismicRichText components={label} field={slice.primary.label} />
        <PrismicRichText components={title} field={slice.primary.title} />
      </Box>
      <PrismicNextImage field={slice.primary.background_image} />
    </Flex>
  )
}

export default HeaderImage

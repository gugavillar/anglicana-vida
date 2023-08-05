import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Heading, VStack, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

type CardTextProps = {
  heading: Content.WeDoingBlockSlice['items'][number]['heading']
  paragraph: Content.WeDoingBlockSlice['items'][number]['paragraph']
}

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      as="h4"
      fontFamily={roboto?.style?.fontFamily}
      fontSize="2rem"
      textTransform="uppercase"
      lineHeight="44px"
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const paragraphComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontFamily={roboto?.style?.fontFamily}
      fontSize="md"
      fontWeight={400}
      color="cinder.950"
      lineHeight="24px"
    >
      {children}
    </Text>
  ),
}

export const CardText = ({ heading, paragraph }: CardTextProps) => {
  return (
    <VStack align="flex-start" spacing={2}>
      <PrismicRichText components={headingComponent} field={heading} />
      <PrismicRichText components={paragraphComponent} field={paragraph} />
    </VStack>
  )
}

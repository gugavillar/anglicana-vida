import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

type BoxHeaderProps = {
  data: Content.WeDoingBlockSlice['primary']
}

const headingComponent: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const subHeadingComponent: JSXMapSerializer = {
  heading6: ({ children }) => (
    <Heading
      as="h6"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

export const BoxHeader = ({ data }: BoxHeaderProps) => {
  return (
    <VStack maxWidth="48rem" as="header" spacing={4}>
      <PrismicRichText
        components={subHeadingComponent}
        field={data.sub_heading}
      />
      <PrismicRichText components={headingComponent} field={data.heading} />
    </VStack>
  )
}

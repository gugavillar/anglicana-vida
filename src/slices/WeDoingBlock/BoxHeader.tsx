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

export const BoxHeader = ({ data }: BoxHeaderProps) => {
  return (
    <VStack maxWidth="48rem" as="header" spacing={4}>
      <PrismicRichText components={headingComponent} field={data.heading} />
    </VStack>
  )
}

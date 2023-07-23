import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

const headingComponent: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      textTransform="uppercase"
      fontSize={{ base: 'xl', md: '5xl', lg: '5xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
      textAlign="center"
      mb={12}
    >
      {children}
    </Heading>
  ),
}

type HeaderBlockProps = {
  primary: Simplify<Content.EventCardsSlice>['primary']
}

export const HeaderBlock = ({ primary: { heading } }: HeaderBlockProps) => {
  return <PrismicRichText components={headingComponent} field={heading} />
}

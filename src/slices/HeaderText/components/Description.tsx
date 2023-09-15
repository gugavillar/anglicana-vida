import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

export type PrimaryDescription =
  Content.HeaderTextSliceWithDescription['primary']

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      lineHeight="24px"
      color="cinder.950"
      textAlign="center"
      fontWeight={400}
      fontFamily={roboto?.style?.fontFamily}
      mt={8}
    >
      {children}
    </Text>
  ),
}

const variationsHasDescriptions = ['withDescription', 'withCellCards']

type DescriptionProps = {
  variation: Content.HeaderTextSlice['variation']
  primary: PrimaryDescription
}

export const Description = ({
  primary: { description },
  variation,
}: DescriptionProps) => {
  if (variationsHasDescriptions.includes(variation)) return null

  return (
    <PrismicRichText components={descriptionComponent} field={description} />
  )
}

import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Text } from '@chakra-ui/react'

export type PrimaryDescription =
  Content.HeaderTextSliceWithDescription['primary']

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      lineHeight="24px"
      color="cinder.950"
      textAlign="center"
      mt={8}
    >
      {children}
    </Text>
  ),
}

type DescriptionProps = {
  variation: Content.HeaderTextSlice['variation']
  primary: PrimaryDescription
}

export const Description = ({
  primary: { description },
  variation,
}: DescriptionProps) => {
  if (variation !== 'withDescription') return null

  return (
    <PrismicRichText components={descriptionComponent} field={description} />
  )
}

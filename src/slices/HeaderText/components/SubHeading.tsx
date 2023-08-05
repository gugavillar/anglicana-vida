import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

export type PrimarySubHeading =
  | Content.HeaderTextSliceDefault['primary']
  | Content.HeaderTextSliceWithDescription['primary']
  | Content.HeaderTextSliceWithRegisterCardEvent['primary']
  | Content.HeaderTextSliceWithPeopleCard['primary']

const subHeadingComponent: JSXMapSerializer = {
  heading6: ({ children }) => (
    <Heading
      as="h6"
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

type SubHeadingProps = {
  variation: Content.HeaderTextSlice['variation']
  primary: PrimarySubHeading
}

const isSliceVariationWithoutSubHeading = [
  'withCardEvent',
  'withoutSubHeading',
  'withSermonCard',
]

export const SubHeading = ({
  primary: { sub_heading: subHeading },
  variation,
}: SubHeadingProps) => {
  if (isSliceVariationWithoutSubHeading.includes(variation)) return null

  return <PrismicRichText components={subHeadingComponent} field={subHeading} />
}

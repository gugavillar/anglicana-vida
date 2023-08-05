import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Heading, VStack, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { CellCardType } from '../../home'

const nameComponent: JSXMapSerializer = {
  heading5: ({ children }) => (
    <Heading
      as="h5"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      textTransform="uppercase"
      fontSize="2xl"
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const locationComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize="md"
      lineHeight="24px"
      color="cinder.950"
    >
      {children}
    </Text>
  ),
}

type CellCardAndLocationType = {
  name: CellCardType['name']
  location: CellCardType['location']
}

export const CellNameAndLocation = ({
  location,
  name,
}: CellCardAndLocationType) => {
  return (
    <VStack align="flex-start" spacing={4} mb={12}>
      <PrismicRichText components={nameComponent} field={name} />
      <PrismicRichText components={locationComponent} field={location} />
    </VStack>
  )
}

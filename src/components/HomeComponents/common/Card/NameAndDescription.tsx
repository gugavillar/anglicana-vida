import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Heading, VStack, Text } from '@chakra-ui/react'

import { IfComponent } from '@/components/IfComponent'

import { roboto } from '@/fonts/roboto'

import { CommonCardType } from '../../home'

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

const descriptionComponent: JSXMapSerializer = {
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

type NameAndDescriptionType = {
  name: CommonCardType['name']
  description: CommonCardType['description']
}

export const NameAndDescription = ({
  description,
  name,
}: NameAndDescriptionType) => {
  return (
    <VStack align="flex-start" spacing={4} mb={6}>
      <PrismicRichText components={nameComponent} field={name} />
      <IfComponent
        condition={!!description}
        component={
          <PrismicRichText
            components={descriptionComponent}
            field={description}
          />
        }
      />
    </VStack>
  )
}

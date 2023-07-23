import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { CardBody, VStack, Text, Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

const titleComponent: JSXMapSerializer = {
  heading5: ({ children }) => (
    <Heading
      as="h5"
      color="cinder.950"
      fontWeight={700}
      fontSize="2xl"
      fontFamily={roboto?.style?.fontFamily}
      textTransform="uppercase"
    >
      {children}
    </Heading>
  ),
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      color="cinder.950"
      fontWeight={400}
      lineHeight={{ base: '16px', md: '24px', lg: '24px' }}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      fontFamily={roboto?.style?.fontFamily}
    >
      {children}
    </Text>
  ),
}

type EventCardBodyProps = {
  card: Simplify<Content.EventCardsSliceDefaultItem>
}

export const EventCardBody = ({
  card: { title, description },
}: EventCardBodyProps) => {
  return (
    <CardBody p={0} px={{ base: 3, md: 4, lg: 4 }}>
      <VStack align="flex-start" spacing={4}>
        <Text
          fontSize="xs"
          backgroundClip="text"
          bgGradient="linear(163deg, #A54E2B 0%, #DC9853 100%)"
          fontFamily={roboto?.style?.fontFamily}
          fontWeight={700}
        >
          PRÓXIMO EVENTO
        </Text>
        <PrismicRichText components={titleComponent} field={title} />
        <PrismicRichText
          components={descriptionComponent}
          field={description}
        />
      </VStack>
    </CardBody>
  )
}

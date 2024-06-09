import { EventDocument } from '@/prismic-types'
import { PrismicNextImage } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, VStack, Text } from '@chakra-ui/react'

import { H4 } from '@/components'

type EventCardProps = {
  eventObjectProperty: EventDocument<string>['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text textAlign="justify">{children}</Text>,
}

export const EventCard = ({ eventObjectProperty }: EventCardProps) => {
  if (!eventObjectProperty) return null

  const biweeklyEvent = eventObjectProperty.biweekly
    ? ' - Quinzenalmente'
    : null

  return (
    <Card maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }} flex={1}>
      <CardBody p={0}>
        <PrismicNextImage
          field={eventObjectProperty.image}
          style={{
            borderTopLeftRadius: '0.375rem',
            borderTopRightRadius: '0.375rem',
            margin: '0 auto',
            width: '100%',
          }}
        />
        <VStack align="flex-start" p={5}>
          <Text fontSize="sm" opacity={0.65}>
            {eventObjectProperty.week_day} - {eventObjectProperty.schedule}
            {biweeklyEvent}
          </Text>
          <H4>{eventObjectProperty.name}</H4>
          <PrismicRichText
            components={descriptionComponent}
            field={eventObjectProperty.description}
          />
        </VStack>
      </CardBody>
    </Card>
  )
}

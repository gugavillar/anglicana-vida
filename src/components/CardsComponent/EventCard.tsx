import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { EventDocument } from '../../../prismicio-types'

type EventCardProps = {
  eventObjectProperty: EventDocument<string>['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text fontFamily={roboto?.style?.fontFamily} textAlign="justify">
      {children}
    </Text>
  ),
}

export const EventCard = ({ eventObjectProperty }: EventCardProps) => {
  if (!eventObjectProperty) return null

  const biweeklyEvent = eventObjectProperty.biweekly
    ? ' - Quinzenalmente'
    : null

  return (
    <Card maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }} minHeight="md">
      <CardBody p={0}>
        <Image
          src={eventObjectProperty?.image?.url as string}
          alt={eventObjectProperty?.image?.alt as string}
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Stack spacing={1} p={5}>
          <Text
            fontSize="sm"
            fontFamily={roboto?.style?.fontFamily}
            opacity={0.65}
          >
            {eventObjectProperty.week_day} - {eventObjectProperty.schedule}
            {biweeklyEvent}
          </Text>
          <Heading as="h4" size="md" fontFamily={roboto?.style?.fontFamily}>
            {eventObjectProperty.name}
          </Heading>
          <PrismicRichText
            components={descriptionComponent}
            field={eventObjectProperty.description}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}

import { EventDocument } from '@/prismic-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, Stack, Text, Image } from '@chakra-ui/react'

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
        <Image
          src={eventObjectProperty?.image?.url as string}
          alt={eventObjectProperty?.image?.alt as string}
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          mx="auto"
        />
        <Stack spacing={1} p={5}>
          <Text fontSize="sm" opacity={0.65}>
            {eventObjectProperty.week_day} - {eventObjectProperty.schedule}
            {biweeklyEvent}
          </Text>
          <H4>{eventObjectProperty.name}</H4>
          <PrismicRichText
            components={descriptionComponent}
            field={eventObjectProperty.description}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}

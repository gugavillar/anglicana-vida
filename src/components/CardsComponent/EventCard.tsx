import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { EventDocument } from '../../../prismicio-types'

type EventCardProps = {
  data: EventDocument<string>['data']
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text fontFamily={roboto?.style?.fontFamily} textAlign="justify">
      {children}
    </Text>
  ),
}

export const EventCard = ({ data }: EventCardProps) => {
  return (
    <Card maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }} minHeight="md">
      <CardBody p={0}>
        <Image
          src={data?.image?.url as string}
          alt={data?.image?.alt as string}
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Stack spacing={1} p={5}>
          <Text
            fontSize="sm"
            fontFamily={roboto?.style?.fontFamily}
            opacity={0.65}
          >
            {data.week_day} - {data.schedule}
            {data.biweekly ? ' - Quinzenalmente' : ''}
          </Text>
          <Heading as="h4" size="md" fontFamily={roboto?.style?.fontFamily}>
            {data.name}
          </Heading>
          <PrismicRichText
            components={descriptionComponent}
            field={data.description}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}

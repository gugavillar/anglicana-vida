import type { Content } from '@prismicio/client'

import { Box, CardHeader, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'
import { dayOfMonth, monthAbbreviation } from '@/formatters'

import type { Simplify } from '../../../prismicio-types'

type EventDateProps = {
  children: Simplify<Content.EventCardsSliceDefaultItem>['date']
}

const EventDate = ({ children }: EventDateProps) => {
  const eventDay = dayOfMonth(new Date(children as string))
  const eventMonth = monthAbbreviation(new Date(children as string))
  return (
    <Box>
      <Text
        textAlign="end"
        fontSize="2xl"
        fontWeight={700}
        fontFamily={roboto?.style?.fontFamily}
      >
        {eventDay}
      </Text>
      <Text
        textTransform="uppercase"
        fontSize="md"
        fontWeight={400}
        fontFamily={roboto?.style?.fontFamily}
        color="cinder.950"
      >
        {eventMonth}
      </Text>
    </Box>
  )
}

type EventCardHeaderProps = {
  card: Simplify<Content.EventCardsSliceDefaultItem>
}

export const EventCardHeader = ({ card: { date } }: EventCardHeaderProps) => {
  return (
    <CardHeader p={4} pb={2} alignSelf="end">
      <EventDate>{date}</EventDate>
    </CardHeader>
  )
}

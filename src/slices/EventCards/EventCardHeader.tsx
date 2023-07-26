import type { Content } from '@prismicio/client'

import { Box, CardHeader, Text, Flex } from '@chakra-ui/react'

import { GradientText } from '@/components/GradientText'
import { IfComponent } from '@/components/IfComponent'

import { roboto } from '@/fonts/roboto'
import { dayOfMonth, monthAbbreviation } from '@/formatters'

import type { Simplify } from '../../../prismicio-types'

type EventDateProps = {
  children: Simplify<Content.EventCardsSliceDefaultItem>['date']
  gradientText?: string
}

const EventDate = ({ children, gradientText }: EventDateProps) => {
  const eventDay = dayOfMonth(new Date(children as string))
  const eventMonth = monthAbbreviation(new Date(children as string))
  const justify = gradientText ? 'space-between' : 'end'
  return (
    <Flex align="end" justify={justify}>
      <IfComponent
        condition={!!gradientText}
        component={<GradientText text={gradientText} />}
      />
      <Box textAlign="end">
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}
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
    </Flex>
  )
}

type EventCardHeaderProps = {
  card: Simplify<Content.EventCardsSliceDefaultItem>
  gradientText?: string
}

export const EventCardHeader = ({
  card: { date },
  gradientText,
}: EventCardHeaderProps) => {
  return (
    <CardHeader p={0} mb={2}>
      <EventDate gradientText={gradientText}>{date}</EventDate>
    </CardHeader>
  )
}

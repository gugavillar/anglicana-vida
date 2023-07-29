import { Box, CardHeader, Text, Flex } from '@chakra-ui/react'

import { GradientText } from '@/components/GradientText'
import { IfComponent } from '@/components/IfComponent'

import { roboto } from '@/fonts/roboto'
import { dayOfMonth, monthAbbreviation } from '@/formatters'

import { EventCardsProps } from '.'

type EventDateProps = {
  children: EventCardsProps['slice']['items'][number]['date']
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
          fontSize={{ base: 'lg', md: '2xl', lg: '1.75rem' }}
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
  card: EventCardsProps['slice']['items'][number]
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

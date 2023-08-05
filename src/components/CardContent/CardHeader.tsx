import {
  Box,
  CardHeader as ChakraCardHeader,
  Text,
  Flex,
} from '@chakra-ui/react'

import { GradientText } from '@/components/GradientText'
import { IfComponent } from '@/components/IfComponent'

import { roboto } from '@/fonts/roboto'
import { dayOfMonth, monthAbbreviation } from '@/formatters'

import { CardType } from './card'

type EventDateProps = {
  children: CardType['initial_date']
  gradientText?: string
}

const EventDate = ({ children, gradientText }: EventDateProps) => {
  const eventDay = dayOfMonth(children as string)
  const eventMonth = monthAbbreviation(children as string)
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
          color="cinder.950"
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

type CardHeaderProps = {
  card: CardType
  gradientText?: string
}

export const CardHeader = ({
  card: { initial_date: initialDate },
  gradientText,
}: CardHeaderProps) => {
  return (
    <ChakraCardHeader p={0} mb={2}>
      <EventDate gradientText={gradientText}>{initialDate}</EventDate>
    </ChakraCardHeader>
  )
}

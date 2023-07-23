import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { CardFooter, VStack, Text, Grid, GridItem } from '@chakra-ui/react'
import { Clock, MapPinLine } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'
import { dayOfWeekNameAndHourWithMinutes, dayOfWeekReplace } from '@/formatters'

import type { Simplify } from '../../../prismicio-types'

const locationComponent: JSXMapSerializer = {
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

type InitialAndFinalDateTimeProps = {
  children: string
}

const InitialAndFinalDateTime = ({
  children,
}: InitialAndFinalDateTimeProps) => (
  <Text
    color="cinder.950"
    fontWeight={400}
    lineHeight={{ base: '16px', md: '24px', lg: '24px' }}
    fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
    fontFamily={roboto?.style?.fontFamily}
    textTransform="capitalize"
  >
    {children}
  </Text>
)

type EventCardFooterProps = {
  card: Simplify<Content.EventCardsSliceDefaultItem>
}

export const EventCardFooter = ({
  card: { location, initial_date: initialDate, final_date: finalDate },
}: EventCardFooterProps) => {
  const initial = dayOfWeekReplace(
    dayOfWeekNameAndHourWithMinutes(new Date(initialDate as string)),
  )
  const final = dayOfWeekReplace(
    dayOfWeekNameAndHourWithMinutes(new Date(finalDate as string)),
  )

  return (
    <CardFooter p={{ base: 3, md: 4, lg: 4 }}>
      <VStack align="flex-start" spacing={4}>
        <Grid templateColumns={'25px 1fr'} columnGap={4}>
          <GridItem>
            <Clock size={20} />
          </GridItem>
          <GridItem>
            <InitialAndFinalDateTime>{initial}</InitialAndFinalDateTime>
            <InitialAndFinalDateTime>{final}</InitialAndFinalDateTime>
          </GridItem>
        </Grid>
        <Grid templateColumns={'25px 1fr'} columnGap={4}>
          <GridItem>
            <MapPinLine size={20} />
          </GridItem>
          <GridItem>
            <PrismicRichText components={locationComponent} field={location} />
          </GridItem>
        </Grid>
      </VStack>
    </CardFooter>
  )
}

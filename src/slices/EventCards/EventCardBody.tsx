import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  CardBody,
  VStack,
  Text,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { Clock, MapPinLine } from 'phosphor-react'

import { GradientText } from '@/components/GradientText'
import { IfComponent } from '@/components/IfComponent'

import { roboto } from '@/fonts/roboto'
import { dayOfWeekNameAndHourWithMinutes, dayOfWeekReplace } from '@/formatters'

import type { Simplify } from '../../../prismicio-types'

const titleComponent: JSXMapSerializer = {
  heading5: ({ children }) => (
    <Heading
      as="h5"
      color="cinder.950"
      fontWeight={700}
      fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}
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

type EventCardBodyProps = {
  card: Simplify<Content.EventCardsSliceDefault>['items'][number]
  gradientText?: string
}

export const EventCardBody = ({
  card: {
    title,
    description,
    initial_date: initialDate,
    final_date: finalDate,
    location,
  },
  gradientText,
}: EventCardBodyProps) => {
  const initial = dayOfWeekReplace(
    dayOfWeekNameAndHourWithMinutes(new Date(initialDate as string)),
  )
  const final = dayOfWeekReplace(
    dayOfWeekNameAndHourWithMinutes(new Date(finalDate as string)),
  )
  return (
    <CardBody p={0} maxWidth="32rem">
      <VStack align="flex-start" spacing={4} mb={8}>
        <IfComponent
          condition={!!gradientText}
          component={<GradientText text={gradientText} />}
        />
        <PrismicRichText components={titleComponent} field={title} />
        <PrismicRichText
          components={descriptionComponent}
          field={description}
        />
      </VStack>
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
    </CardBody>
  )
}

import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  CardBody as ChakraCardBody,
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
import {
  dayOfWeekNameAndDayMonthYear,
  hourAndMinutes,
  dayOfWeekReplace,
} from '@/formatters'

import { CardType } from './card'

const titleComponent: JSXMapSerializer = {
  heading5: ({ children }) => (
    <Heading
      as="h5"
      color="cinder.950"
      fontWeight={700}
      fontSize={{ base: 'lg', md: '2xl', lg: '1.75rem' }}
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

type TimeComponentProps = {
  weekNameAndDate: string
  hourAndMinutes: string
}

const TimeComponent = ({
  hourAndMinutes,
  weekNameAndDate,
}: TimeComponentProps) => (
  <VStack spacing={0} align="flex-start">
    <Text
      color="cinder.950"
      fontWeight={400}
      lineHeight={{ base: '16px', md: '24px', lg: '24px' }}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      fontFamily={roboto?.style?.fontFamily}
      textTransform="capitalize"
    >
      {weekNameAndDate}
    </Text>
    <Text
      color="cinder.950"
      fontWeight={400}
      lineHeight={{ base: '16px', md: '24px', lg: '24px' }}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      fontFamily={roboto?.style?.fontFamily}
      textTransform="capitalize"
    >
      {hourAndMinutes}
    </Text>
  </VStack>
)

type CardBodyProps = {
  card: CardType
  gradientText?: string
}

export const CardBody = ({
  card: {
    title,
    description,
    initial_date: initialDate,
    final_date: finalDate,
    location,
  },
  gradientText,
}: CardBodyProps) => {
  const formatInitialDate = dayOfWeekReplace(
    dayOfWeekNameAndDayMonthYear(initialDate as string),
  )
  const formatFinalDate = dayOfWeekReplace(
    dayOfWeekNameAndDayMonthYear(finalDate as string),
  )
  const formatInitialHourAndMinutes = hourAndMinutes(initialDate as string)
  const formatFinalHourAndMinutes = hourAndMinutes(finalDate as string)
  return (
    <ChakraCardBody p={0} maxWidth="32rem">
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
        <Grid
          templateColumns={{ base: '16px 1fr', md: '25px 1fr', lg: '25px 1fr' }}
          columnGap={{ base: 2, md: 4, lg: 4 }}
        >
          <GridItem>
            <Clock color="#161722" size={20} />
          </GridItem>
          <GridItem>
            <TimeComponent
              weekNameAndDate={formatInitialDate}
              hourAndMinutes={formatInitialHourAndMinutes}
            />
            <TimeComponent
              weekNameAndDate={formatFinalDate}
              hourAndMinutes={formatFinalHourAndMinutes}
            />
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: '16px 1fr', md: '25px 1fr', lg: '25px 1fr' }}
          columnGap={{ base: 2, md: 4, lg: 4 }}
        >
          <GridItem>
            <MapPinLine color="#161722" size={20} />
          </GridItem>
          <GridItem>
            <PrismicRichText components={locationComponent} field={location} />
          </GridItem>
        </Grid>
      </VStack>
    </ChakraCardBody>
  )
}

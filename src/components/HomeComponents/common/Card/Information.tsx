import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Text, Grid, GridItem } from '@chakra-ui/react'
import { Calendar, Clock, MapPin, UsersThree } from 'phosphor-react'

import { IfComponent } from '@/components/IfComponent'

import { roboto } from '@/fonts/roboto'

import { CellCardType, CommonCardType, RecurrentCardType } from '../../home'

type InformationProps = {
  leader?: CellCardType['leader']
  weekDay?: CellCardType['week_day']
  recurrentDay?: RecurrentCardType['recurrent_day']
  initialTime: CommonCardType['initial_time']
  location: CommonCardType['location']
}

const paragraphComponent: JSXMapSerializer = {
  paragraph: ({ children }) => {
    return (
      <Text
        fontFamily={roboto?.style?.fontFamily}
        fontSize="lg"
        color="cinder.950"
      >
        {children}
      </Text>
    )
  },
}

export const Information = ({
  initialTime,
  location,
  leader,
  weekDay,
  recurrentDay,
}: InformationProps) => {
  const eventDay = weekDay || recurrentDay
  return (
    <VStack align="flex-start" spacing={2}>
      <Grid templateColumns="25px 1fr" columnGap={4}>
        <GridItem>
          <Calendar size={24} />
        </GridItem>
        <GridItem>
          <PrismicRichText components={paragraphComponent} field={eventDay} />
        </GridItem>
      </Grid>
      <Grid templateColumns="25px 1fr" columnGap={4}>
        <GridItem>
          <Clock size={24} />
        </GridItem>
        <GridItem>
          <PrismicRichText
            components={paragraphComponent}
            field={initialTime}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns="25px 1fr" columnGap={4}>
        <GridItem>
          <MapPin size={24} />
        </GridItem>
        <GridItem>
          <PrismicRichText components={paragraphComponent} field={location} />
        </GridItem>
      </Grid>
      <IfComponent
        condition={!!leader?.length}
        component={
          <Grid templateColumns="25px 1fr" columnGap={4}>
            <GridItem>
              <UsersThree size={24} />
            </GridItem>
            <GridItem>
              <VStack align="flex-start" spacing={0}>
                <PrismicRichText
                  components={paragraphComponent}
                  field={leader}
                />
              </VStack>
            </GridItem>
          </Grid>
        }
      />
    </VStack>
  )
}

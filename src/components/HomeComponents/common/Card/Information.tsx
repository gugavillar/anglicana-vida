import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Text, Flex } from '@chakra-ui/react'
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
      <Flex align="center" gap={2}>
        <Calendar size={24} />
        <PrismicRichText components={paragraphComponent} field={eventDay} />
      </Flex>
      <Flex align="center" gap={2}>
        <Clock size={24} />
        <PrismicRichText components={paragraphComponent} field={initialTime} />
      </Flex>
      <Flex align="center" gap={2}>
        <MapPin size={24} />
        <PrismicRichText components={paragraphComponent} field={location} />
      </Flex>
      <IfComponent
        condition={!!leader?.length}
        component={
          <Flex align="flex-start" gap={2} wrap="wrap">
            <UsersThree size={24} />
            <VStack align="flex-start" spacing={0}>
              <PrismicRichText components={paragraphComponent} field={leader} />
            </VStack>
          </Flex>
        }
      />
    </VStack>
  )
}

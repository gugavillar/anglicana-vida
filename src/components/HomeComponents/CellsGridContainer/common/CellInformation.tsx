import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { VStack, Text, Flex } from '@chakra-ui/react'
import { CalendarBlank, Clock, UserCircle } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'

import { CellCardType } from '../../home'

type CellInformationProps = {
  leader: CellCardType['leader']
  weekDay: CellCardType['week_day']
  initialTime: CellCardType['initial_time']
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

export const CellInformation = ({
  initialTime,
  leader,
  weekDay,
}: CellInformationProps) => {
  return (
    <VStack align="flex-start" spacing={2}>
      <Flex align="center" gap={2}>
        <UserCircle size={24} />
        <PrismicRichText components={paragraphComponent} field={leader} />
      </Flex>
      <Flex align="center" gap={2}>
        <CalendarBlank size={24} />
        <PrismicRichText components={paragraphComponent} field={weekDay} />
      </Flex>
      <Flex align="center" gap={2}>
        <Clock size={24} />
        <PrismicRichText components={paragraphComponent} field={initialTime} />
      </Flex>
    </VStack>
  )
}

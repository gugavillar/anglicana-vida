import { PrismicNextImage } from '@prismicio/next'

import { Flex } from '@chakra-ui/react'

import { NavigationButton } from '@/components/Buttons'

import { EventRegisterCard } from './EventRegisterCard'
import { RegisterCardType } from '../event'

type EventRegisterContainerProps = {
  items: Array<RegisterCardType>
}

const pathsToShow = ['/']

export const EventRegisterContainer = ({
  items,
}: EventRegisterContainerProps) => {
  return (
    <Flex direction="column" gap={8}>
      {items.map((item, index) => {
        const isLastIndex = items?.length === index + 1
        return (
          <Flex
            key={index}
            direction={{
              base: 'column-reverse',
              md: 'column-reverse',
              lg: 'row',
            }}
            maxWidth="full"
            mx="auto"
            {...(!isLastIndex && { mt: 6 })}
          >
            <EventRegisterCard item={item} />
            <PrismicNextImage field={item.image} />
          </Flex>
        )
      })}
      <NavigationButton
        pathsToShow={pathsToShow}
        textButton="Veja todos os eventos"
        pathRouter="/eventos"
      />
    </Flex>
  )
}

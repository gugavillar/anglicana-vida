import { Flex, Image } from '@chakra-ui/react'

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
            <Image
              objectFit="cover"
              src={item.image.url as string}
              alt={item.image?.alt as string}
            />
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

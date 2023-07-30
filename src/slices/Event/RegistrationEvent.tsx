import { Flex, Image } from '@chakra-ui/react'

import { RegistrationCard } from './RegistrationCard'

import type {
  EventCardsSliceRegistrationItem,
  Simplify,
} from '../../../prismicio-types'

type RegistrationEventProps = {
  items: Array<Simplify<EventCardsSliceRegistrationItem>>
}

export const RegistrationEvent = ({ items }: RegistrationEventProps) => {
  return items.map((item, index) => {
    const isLastIndex = items?.length === index + 1
    return (
      <Flex
        key={index}
        direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
        maxWidth="full"
        mx="auto"
        {...(!isLastIndex && { mt: 6 })}
      >
        <RegistrationCard item={item} />
        <Image
          objectFit="cover"
          src={item.image.url as string}
          alt={item.image?.alt as string}
        />
      </Flex>
    )
  })
}

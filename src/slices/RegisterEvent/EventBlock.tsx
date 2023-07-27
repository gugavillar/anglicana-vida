import { Flex, Image } from '@chakra-ui/react'

import { CardEvent } from './CardEvent'

import type { RegisterEventSlice, Simplify } from '../../../prismicio-types'

type EventBlockProps = {
  items: Simplify<RegisterEventSlice>['items']
}

export const EventBlockContainer = ({ items }: EventBlockProps) => {
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
        <CardEvent item={item} />
        <Image
          objectFit="cover"
          src={item.image.url as string}
          alt={item.image?.alt as string}
        />
      </Flex>
    )
  })
}

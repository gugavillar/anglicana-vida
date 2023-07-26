import { PrismicNextImage } from '@prismicio/next'

import { Flex } from '@chakra-ui/react'

import { CardEvent } from './CardEvent'

import type { RegisterEventSlice, Simplify } from '../../../prismicio-types'

type EventBlockProps = {
  items: Simplify<RegisterEventSlice>['items']
}

export const EventBlockContainer = ({ items }: EventBlockProps) => {
  return items.map((item, index) => (
    <Flex
      key={index}
      direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
      maxWidth="full"
      mx="auto"
    >
      <CardEvent item={item} />
      <PrismicNextImage field={item.image} />
    </Flex>
  ))
}

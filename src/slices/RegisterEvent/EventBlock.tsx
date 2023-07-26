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
      minHeight="32rem"
      maxWidth={{ base: 'full', md: 'full', lg: 'inherit' }}
      px={6}
      align="center"
      justify="center"
      direction={{ base: 'column-reverse', md: 'row', lg: 'row' }}
    >
      <CardEvent item={item} />
      <PrismicNextImage field={item.image} />
    </Flex>
  ))
}

import { SimpleGrid } from '@chakra-ui/react'

import { EventCard } from './EventCard'
import { EventCardType } from '../event'

type EventGridContainerProps = {
  items: Array<EventCardType>
}

export const EventGridContainer = ({ items }: EventGridContainerProps) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      minWidth="18.75rem"
      rowGap={6}
      columnGap={6}
    >
      <EventCard items={items} />
    </SimpleGrid>
  )
}

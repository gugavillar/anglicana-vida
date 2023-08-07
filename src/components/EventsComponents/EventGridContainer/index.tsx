import { SimpleCardsGrid } from '@/components/SimpleCardsGrid'

import { EventCard } from './EventCard'
import { EventCardType } from '../event'

type EventGridContainerProps = {
  items: Array<EventCardType>
}

export const EventGridContainer = ({ items }: EventGridContainerProps) => {
  return (
    <SimpleCardsGrid>
      <EventCard items={items} />
    </SimpleCardsGrid>
  )
}

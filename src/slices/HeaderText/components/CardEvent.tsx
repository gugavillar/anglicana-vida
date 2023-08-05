import type { Content } from '@prismicio/client'

import { EventGridContainer } from '@/components/EventsComponents/EventGridContainer'
import { SliceContainer } from '@/components/SliceContainer'

import { CardEventDocument } from '../../../../prismicio-types'

type CardEventProps = {
  cardEvents: CardEventDocument<string>[]
  variation: Content.HeaderTextSlice['variation']
}

export const CardEvent = ({ cardEvents, variation }: CardEventProps) => {
  if (!cardEvents?.length || variation !== 'withCardEvent') return null

  const items = cardEvents?.map((item) => ({ ...item.data }))

  return (
    <SliceContainer isBoxContainer>
      <EventGridContainer items={items} />
    </SliceContainer>
  )
}

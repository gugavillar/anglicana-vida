import { SimpleCardsGrid } from '@/components/SimpleCardsGrid'

import { SermonCard } from './SermonCard'
import { SermonCardType } from '../sermon'

type SermonGridContainerProps = {
  items: Array<SermonCardType>
}

export const SermonGridContainer = ({ items }: SermonGridContainerProps) => {
  return (
    <SimpleCardsGrid>
      <SermonCard items={items} />
    </SimpleCardsGrid>
  )
}

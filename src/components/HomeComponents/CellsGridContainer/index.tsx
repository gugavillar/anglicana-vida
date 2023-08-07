import { SimpleCardsGrid } from '@/components/SimpleCardsGrid'

import { CellCard } from './common/CellCard'
import { CellCardType } from '../home'

type CellsGridContainerProps = {
  items: Array<CellCardType>
}

export const CellsGridContainer = ({ items }: CellsGridContainerProps) => {
  return (
    <SimpleCardsGrid columns={{ base: 1, md: 3, lg: 4 }}>
      {items.map((card, index) => (
        <CellCard key={index} card={card} />
      ))}
    </SimpleCardsGrid>
  )
}

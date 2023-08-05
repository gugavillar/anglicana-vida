import { SimpleGrid } from '@chakra-ui/react'

import { CellCard } from './common/CellCard'
import { CellCardType } from '../home'

type CellsGridContainerProps = {
  items: Array<CellCardType>
}

export const CellsGridContainer = ({ items }: CellsGridContainerProps) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 4 }}
      minWidth="18.75rem"
      rowGap={6}
      columnGap={6}
    >
      {items.map((card, index) => (
        <CellCard key={index} card={card} />
      ))}
    </SimpleGrid>
  )
}

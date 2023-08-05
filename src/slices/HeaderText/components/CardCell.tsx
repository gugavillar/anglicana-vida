import type { Content } from '@prismicio/client'

import { CellsGridContainer } from '@/components/HomeComponents/CellsGridContainer'
import { SliceContainer } from '@/components/SliceContainer'

import { CellCardDocument } from '../../../../prismicio-types'

type CardCellProps = {
  cellCard: CellCardDocument<string>[]
  variation: Content.HeaderTextSlice['variation']
}

export const CardCell = ({ cellCard, variation }: CardCellProps) => {
  if (!cellCard?.length || variation !== 'withCellCard') return null

  const items = cellCard?.map((item) => ({ ...item.data }))
  return (
    <SliceContainer isBoxContainer>
      <CellsGridContainer items={items} />
    </SliceContainer>
  )
}

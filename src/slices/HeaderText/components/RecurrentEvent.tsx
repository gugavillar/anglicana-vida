import type { Content } from '@prismicio/client'

import { RecurrentGridContainer } from '@/components/HomeComponents/RecurrentGridContainer'
import { SliceContainer } from '@/components/SliceContainer'

import { RecurrentEventCardDocument } from '../../../../prismicio-types'

type RecurrentEventProps = {
  recurrentCard: RecurrentEventCardDocument<string>[]
  variation: Content.HeaderTextSlice['variation']
}

export const RecurrentEvent = ({
  recurrentCard,
  variation,
}: RecurrentEventProps) => {
  if (!recurrentCard?.length || variation !== 'withRecurrentEvent') return null

  const items = recurrentCard?.map((item) => ({ ...item.data }))

  return (
    <SliceContainer isBoxContainer>
      <RecurrentGridContainer items={items} />
    </SliceContainer>
  )
}

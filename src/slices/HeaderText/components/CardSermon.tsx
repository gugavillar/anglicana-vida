import type { Content } from '@prismicio/client'

import { SermonGridContainer } from '@/components/SermonsComponents/SermonGridContainer'
import { SliceContainer } from '@/components/SliceContainer'

import { SermonCardDocument } from '../../../../prismicio-types'

type CardSermonProps = {
  sermonCard: SermonCardDocument<string>[]
  variation: Content.HeaderTextSlice['variation']
}

export const CardSermon = ({ sermonCard, variation }: CardSermonProps) => {
  if (!sermonCard?.length || variation !== 'withSermonCard') return null

  const items = sermonCard?.map((item) => ({ ...item.data }))
  return (
    <SliceContainer isBoxContainer>
      <SermonGridContainer items={items} />
    </SliceContainer>
  )
}

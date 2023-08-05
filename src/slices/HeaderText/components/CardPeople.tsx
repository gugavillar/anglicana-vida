import type { Content } from '@prismicio/client'

import { PeopleCardGridContainer } from '@/components/AboutComponents/PeopleCardGridContainer'
import { SliceContainer } from '@/components/SliceContainer'

import { PeopleCardDocument } from '../../../../prismicio-types'

type CardPeopleProps = {
  peopleCard: PeopleCardDocument<string>[]
  variation: Content.HeaderTextSlice['variation']
}

export const CardPeople = ({ peopleCard, variation }: CardPeopleProps) => {
  if (!peopleCard?.length || variation !== 'withPeopleCard') return null

  const items = peopleCard?.map((item) => ({ ...item.data }))
  return (
    <SliceContainer isBoxContainer>
      <PeopleCardGridContainer items={items} />
    </SliceContainer>
  )
}

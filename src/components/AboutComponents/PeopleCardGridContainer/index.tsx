import { SimpleCardsGrid } from '@/components/SimpleCardsGrid'

import { PeopleCard } from './PeopleCard'
import { PeopleCardType } from '../about'

type PeopleCardGridContainerProps = {
  items: Array<PeopleCardType>
}

export const PeopleCardGridContainer = ({
  items,
}: PeopleCardGridContainerProps) => {
  return (
    <SimpleCardsGrid columns={{ base: 1, md: 2, lg: 4 }} minWidth="17.5rem">
      <PeopleCard items={items} />
    </SimpleCardsGrid>
  )
}

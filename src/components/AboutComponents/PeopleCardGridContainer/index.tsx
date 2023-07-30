import { SimpleGrid } from '@chakra-ui/react'

import { PeopleCard } from './PeopleCard'
import { PeopleCardType } from '../about'

type PeopleCardGridContainerProps = {
  items: Array<PeopleCardType>
}

export const PeopleCardGridContainer = ({
  items,
}: PeopleCardGridContainerProps) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      minWidth="18.75rem"
      rowGap={6}
      columnGap={6}
    >
      <PeopleCard items={items} />
    </SimpleGrid>
  )
}

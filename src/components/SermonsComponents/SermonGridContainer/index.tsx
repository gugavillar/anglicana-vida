import { SimpleGrid } from '@chakra-ui/react'

import { SermonCard } from './SermonCard'
import { SermonCardType } from '../sermon'

type SermonGridContainerProps = {
  items: Array<SermonCardType>
}

export const SermonGridContainer = ({ items }: SermonGridContainerProps) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      minWidth="18.75rem"
      rowGap={6}
      columnGap={6}
    >
      <SermonCard items={items} />
    </SimpleGrid>
  )
}

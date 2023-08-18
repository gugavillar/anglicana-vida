import type { Content } from '@prismicio/client'

import { SimpleGrid, Box } from '@chakra-ui/react'

import { CardIcon } from './CardIcon'
import { CardText } from './CardText'

type WeDoCardsProps = {
  data: Content.WeDoingBlockSlice['items']
}

export const WeDoCards = ({ data }: WeDoCardsProps) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 3 }}
      minWidth={{ base: 'full', md: '25.6875rem', lg: '25.6875rem' }}
      rowGap={6}
      columnGap={6}
      px={6}
      mt={16}
    >
      {data?.map((item, index) => (
        <Box bg="cinder.100" p={{ base: 8, md: 10, lg: 12 }} key={index}>
          <CardIcon type={item.type} />
          <CardText heading={item.heading} paragraph={item.paragraph} />
        </Box>
      ))}
    </SimpleGrid>
  )
}

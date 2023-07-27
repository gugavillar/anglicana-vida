import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Box, Card, SimpleGrid } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { EventCardBody } from './EventCardBody'
import { EventCardHeader } from './EventCardHeader'
import { HeaderBlock } from './HeaderBlock'

export type EventCardsProps = SliceComponentProps<Content.EventCardsSlice>

const EventCards = ({ slice }: EventCardsProps): JSX.Element => {
  return (
    <SliceContainer>
      <Box px={6}>
        <HeaderBlock primary={slice.primary} />
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          minWidth="18.75rem"
          rowGap={6}
          columnGap={6}
        >
          {slice?.items?.map((card, index) => (
            <Card
              key={index}
              bg="serenade.50"
              boxShadow="none"
              borderRadius={0}
              p={{
                base: 4,
                md: 6,
                lg: '24px 26px 24px 40px',
              }}
              borderBottom="1rem solid transparent"
              _hover={{
                borderBottom: '1rem solid',
                borderColor: '#FFD0A0',
              }}
            >
              <EventCardHeader card={card} />
              <EventCardBody card={card} gradientText="Próximo evento" />
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </SliceContainer>
  )
}

export default EventCards

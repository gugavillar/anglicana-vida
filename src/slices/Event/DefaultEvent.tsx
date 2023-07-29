import { Card, SimpleGrid } from '@chakra-ui/react'

import { EventCardBody } from './EventCardBody'
import { EventCardHeader } from './EventCardHeader'

import { EventCardsProps } from '.'

type DefaultEventProps = {
  items: EventCardsProps['slice']['items']
}

export const DefaultEvent = ({ items }: DefaultEventProps) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      minWidth="18.75rem"
      rowGap={6}
      columnGap={6}
    >
      {items?.map((card, index) => (
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
  )
}

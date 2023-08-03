import { Card } from '@chakra-ui/react'

import { CardBody } from '@/components/CardContent/CardBody'
import { CardHeader } from '@/components/CardContent/CardHeader'

import { EventCardType } from '../event'

type EventCardProps = {
  items: Array<EventCardType>
}

export const EventCard = ({ items }: EventCardProps) => {
  return items?.map((card, index) => (
    <Card
      key={index}
      bg="serenade.50"
      boxShadow="base"
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
      <CardHeader card={card} />
      <CardBody card={card} gradientText="Próximo evento" />
    </Card>
  ))
}

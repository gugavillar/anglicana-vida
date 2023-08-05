import { Card } from '@chakra-ui/react'
import { isFuture, parseISO } from 'date-fns'

import { CardBody } from '@/components/CardContent/CardBody'
import { CardHeader } from '@/components/CardContent/CardHeader'
import { IfComponent } from '@/components/IfComponent'

import { SermonCardType } from '../sermon'

type SermonCardProps = {
  items: Array<SermonCardType>
}

export const SermonCard = ({ items }: SermonCardProps) => {
  return items?.map((card, index) => {
    const isFutureDate = isFuture(parseISO(card?.final_date as string))
    return (
      <IfComponent
        key={index}
        condition={isFutureDate}
        component={
          <Card
            bg="white"
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
            <CardHeader card={card} />
            <CardBody card={card} gradientText="Próximo sermão" />
          </Card>
        }
      />
    )
  })
}

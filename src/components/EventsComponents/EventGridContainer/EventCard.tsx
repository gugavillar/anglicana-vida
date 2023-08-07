import { isFuture, parseISO } from 'date-fns'

import { CardBody } from '@/components/CardContent/CardBody'
import { CardContent } from '@/components/CardContent/CardContent'
import { CardHeader } from '@/components/CardContent/CardHeader'
import { IfComponent } from '@/components/IfComponent'

import { EventCardType } from '../event'

type EventCardProps = {
  items: Array<EventCardType>
}

export const EventCard = ({ items }: EventCardProps) => {
  return items?.map((card, index) => {
    const isFutureDate = isFuture(parseISO(card?.final_date as string))

    return (
      <IfComponent
        key={index}
        condition={isFutureDate}
        component={
          <CardContent bg="serenade.50" boxShadow="base">
            <CardHeader card={card} />
            <CardBody card={card} gradientText="Próximo evento" />
          </CardContent>
        }
      />
    )
  })
}

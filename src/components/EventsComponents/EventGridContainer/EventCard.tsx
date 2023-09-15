import { CardBody } from '@/components/CardContent/CardBody'
import { CardContent } from '@/components/CardContent/CardContent'
import { CardHeader } from '@/components/CardContent/CardHeader'
import { IfComponent } from '@/components/IfComponent'

import { isFutureDate } from '@/formatters'

import { EventCardType } from '../event'

type EventCardProps = {
  items: Array<EventCardType>
}

export const EventCard = ({ items }: EventCardProps) => {
  return items?.map((card, index) => {
    const isFuture = isFutureDate(card?.final_date as string)

    return (
      <IfComponent
        key={index}
        condition={isFuture}
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

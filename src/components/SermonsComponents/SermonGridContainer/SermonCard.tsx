import { isFuture, parseISO } from 'date-fns'

import { CardBody } from '@/components/CardContent/CardBody'
import { CardContent } from '@/components/CardContent/CardContent'
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
          <CardContent bg="white" boxShadow="none">
            <CardHeader card={card} />
            <CardBody card={card} gradientText={card?.series as string} />
          </CardContent>
        }
      />
    )
  })
}

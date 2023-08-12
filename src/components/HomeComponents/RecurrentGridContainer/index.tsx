import { SimpleCardsGrid } from '@/components/SimpleCardsGrid'

import { Card } from '../common/Card'
import { Information } from '../common/Card/Information'
import { RecurrentCardType } from '../home'

type RecurrentGridContainerProps = {
  items: Array<RecurrentCardType>
}

export const RecurrentGridContainer = ({
  items,
}: RecurrentGridContainerProps) => {
  return (
    <SimpleCardsGrid columns={{ base: 1, md: 3, lg: 4 }}>
      {items.map((card, index) => (
        <Card key={index} card={card} bg="white">
          <Information
            initialTime={card?.initial_time}
            location={card?.location}
            recurrentDay={card?.recurrent_day}
          />
        </Card>
      ))}
    </SimpleCardsGrid>
  )
}

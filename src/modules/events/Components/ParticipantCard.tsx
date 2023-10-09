import { ReactNode } from 'react'

import { SubscriptionCard } from '@/components'

type ParticipantCardProps = {
  data: {
    badgeText: string
    year: string
    eventText: string
  }
  cardProps: {
    description: string
    image: ReactNode
  }
}

export const ParticipantCard = ({ data, cardProps }: ParticipantCardProps) => {
  return (
    <SubscriptionCard
      badgeText={data.badgeText}
      eventText={data.eventText}
      year={data.year}
      title="Participantes"
      urlPath="participante"
      cardProps={cardProps}
    />
  )
}

import { ReactNode } from 'react'

import { SubscriptionCard } from '@/components'

type VolunteerCardProps = {
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

export const VolunteerCard = ({ data, cardProps }: VolunteerCardProps) => {
  return (
    <SubscriptionCard
      badgeText={data.badgeText}
      eventText={data.eventText}
      year={data.year}
      title="Voluntários"
      urlPath="voluntario"
      cardProps={cardProps}
    />
  )
}

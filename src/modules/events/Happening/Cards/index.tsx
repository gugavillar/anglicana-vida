import { ParticipantCard, VolunteerCard } from '@/modules'

type HappeningCardsProps = {
  data: {
    badgeTextParticipants: string
    badgeTextVolunteers: string
    eventText: string
    year: string
  }
}

export const HappeningCards = ({ data }: HappeningCardsProps) => {
  return (
    <>
      <ParticipantCard
        data={{ badgeText: data.badgeTextParticipants, ...data }}
      />
      <VolunteerCard data={{ badgeText: data.badgeTextVolunteers, ...data }} />
    </>
  )
}

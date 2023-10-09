import { Image } from '@chakra-ui/react'

import { SubscriptionCard } from '@/components'

const MOCK_CARD = {
  description:
    'É uma oportunidade enriquecedora para fazer a diferença na vida de mulheres. Junte-se a nós e seja um agente de transformação, capacitando mulheres a alcançarem seu potencial pleno enquanto compartilha amor, compaixão e solidariedade.',
  image: (
    <Image
      src="/assets/female_volunteers.jpg"
      alt="Voluntários orando"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
    />
  ),
}

type VolunteerCardProps = {
  data: {
    badgeText: string
    year: string
    eventText: string
  }
}

export const VolunteerCard = ({ data }: VolunteerCardProps) => {
  return (
    <SubscriptionCard
      {...data}
      title="Voluntários"
      urlPath="voluntario"
      cardProps={{ ...MOCK_CARD }}
    />
  )
}

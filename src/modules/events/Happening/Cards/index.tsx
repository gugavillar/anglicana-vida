import { Image } from '@chakra-ui/react'

import { CursilhoFeminino } from '@/components/Icons'

import { ParticipantCard, VolunteerCard } from '@/modules'

type HappeningCardsProps = {
  data: {
    badgeTextParticipants: string
    badgeTextVolunteers: string
    eventText: string
    year: string
  }
}

const MOCK_CARD_2 = {
  description:
    'É uma oportunidade de crescer espiritualmente, fortalecer sua fé e construir relacionamentos significativos. Junte-se a nós nessa emocionante conexão espiritual. Venha fazer parte do Cursilho e descubra um novo caminho de fé e comunhão.',
  image: (
    <CursilhoFeminino
      p={1}
      width={384}
      height={256}
      alignSelf="center"
      bgColor="white"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
    />
  ),
}

const VOLUNTEERS = {
  description:
    'É uma oportunidade enriquecedora para fazer a diferença na vida de jovens. Junte-se a nós e seja um agente de transformação, capacitando jovens a alcançarem seu potencial pleno enquanto compartilha amor, compaixão e solidariedade.',
  image: (
    <Image
      src="/assets/volunteers_happening.jpg"
      alt="Voluntários de mãos unidas"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
    />
  ),
}

export const HappeningCards = ({
  data: { badgeTextParticipants, badgeTextVolunteers, ...rest },
}: HappeningCardsProps) => {
  return (
    <>
      <ParticipantCard
        data={{ badgeText: badgeTextParticipants, ...rest }}
        cardProps={MOCK_CARD_2}
      />
      <VolunteerCard
        data={{ badgeText: badgeTextVolunteers, ...rest }}
        cardProps={VOLUNTEERS}
      />
    </>
  )
}

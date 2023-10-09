import { SubscriptionCard } from '@/components'
import { CursilhoFeminino } from '@/components/Icons'

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

type ParticipantCardProps = {
  data: {
    badgeText: string
    year: string
    eventText: string
  }
}

export const ParticipantCard = ({ data }: ParticipantCardProps) => {
  return (
    <SubscriptionCard
      {...data}
      title="Participantes"
      urlPath="participante"
      cardProps={{
        ...MOCK_CARD_2,
      }}
    />
  )
}

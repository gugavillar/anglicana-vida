import { Flex, Heading, Image } from '@chakra-ui/react'

import { ContentContainer } from '@/components'
import { CursilhoFeminino } from '@/components/Icons'

import { CardSubscription } from './Card'

const MOCK_CARD = {
  title: 'Voluntários',
  urlPath: 'voluntario',
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

const MOCK_CARD_2 = {
  title: 'Participantes',
  urlPath: 'participante',
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

type SubscriptionPageProps = {
  titleOfPage: string
  badgeTextParticipants: string
  badgeTextVolunteers: string
}

export const SubscriptionPage = ({
  titleOfPage,
  badgeTextParticipants,
  badgeTextVolunteers,
}: SubscriptionPageProps) => {
  return (
    <ContentContainer>
      <Heading
        as="h3"
        variant="subTitle"
        alignSelf="center"
        textAlign="center"
        mb={8}
        textTransform="capitalize"
      >
        {titleOfPage}
      </Heading>
      <Flex align="center" wrap="wrap" gap={12} width="full" justify="center">
        <CardSubscription
          cardProps={{ ...MOCK_CARD_2, badgeText: badgeTextParticipants }}
        />
        <CardSubscription
          cardProps={{ ...MOCK_CARD, badgeText: badgeTextVolunteers }}
        />
      </Flex>
    </ContentContainer>
  )
}

import { Card } from '@chakra-ui/react'

import { SecondaryButton } from '@/components/Buttons'

import { CardBody } from '../../CardContent/CardBody'
import { CardHeader } from '../../CardContent/CardHeader'
import { RegisterCardType } from '../event'

type RegistrationCardProps = {
  item: RegisterCardType
}

export const EventRegisterCard = ({ item }: RegistrationCardProps) => {
  return (
    <Card
      bg="serenade.50"
      boxShadow="base"
      borderRadius={0}
      maxWidth={{ base: 'full', md: 'full', lg: '27.1875rem' }}
      p={{
        base: 4,
        md: 6,
        lg: 6,
      }}
    >
      <CardHeader gradientText="Inscrições abertas" card={item} />
      <CardBody card={item} />
      <SecondaryButton
        textButton="Inscrever"
        mt={8}
        maxW={{ base: 'full', md: 48, lg: 48 }}
      />
    </Card>
  )
}

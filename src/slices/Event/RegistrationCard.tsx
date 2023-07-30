import { Card } from '@chakra-ui/react'

import { SecondaryButton } from '@/components/Buttons'

import { EventCardBody } from './EventCardBody'
import { EventCardHeader } from './EventCardHeader'

import { EventCardsProps } from '.'

type RegistrationCardProps = {
  item: EventCardsProps['slice']['items'][number]
}

export const RegistrationCard = ({ item }: RegistrationCardProps) => {
  return (
    <Card
      bg="serenade.50"
      boxShadow="none"
      borderRadius={0}
      maxWidth={{ base: 'full', md: 'full', lg: '27.1875rem' }}
      p={{
        base: 4,
        md: 6,
        lg: 6,
      }}
    >
      <EventCardHeader gradientText="Inscrições abertas" card={item} />
      <EventCardBody card={item} />
      <SecondaryButton
        textButton="Inscrever"
        mt={8}
        maxW={{ base: 'full', md: 48, lg: 48 }}
      />
    </Card>
  )
}

import { Card } from '@chakra-ui/react'

import { SecondaryButton } from '@/components/Buttons'

import { EventCardBody } from '../EventCards/EventCardBody'
import { EventCardHeader } from '../EventCards/EventCardHeader'

import type { RegisterEventSlice, Simplify } from '../../../prismicio-types'

type CardEventProps = {
  item: Simplify<RegisterEventSlice>['items'][number]
}

export const CardEvent = ({ item }: CardEventProps) => {
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

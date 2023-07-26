import { Card, Button } from '@chakra-ui/react'

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
      p={{
        base: 4,
        md: 6,
        lg: '32px 32px 60px 90px',
      }}
      minWidth={{ base: 'full', md: 'full', lg: '27.1875rem' }}
      minHeight="32rem"
    >
      <EventCardHeader gradientText="Inscrições abertas" card={item} />
      <EventCardBody card={item} />
      <Button
        maxW={48}
        minH={16}
        px={16}
        py={6}
        borderRadius={12}
        mt={8}
        fontSize="md"
        color="flesh.200"
        textTransform="uppercase"
        bg="cinder.950"
        borderBottom="2px solid transparent"
        _hover={{
          bg: 'cinder.950',
          opacity: 0.9,
        }}
      >
        Inscrever
      </Button>
    </Card>
  )
}

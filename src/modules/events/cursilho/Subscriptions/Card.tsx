import { ReactNode } from 'react'

import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react'

import { useSubscriptionEvent } from './useSubscriptionEvent'

type CardSubscriptionProps = {
  cardProps: {
    image: ReactNode
    title: string
    description: string
    urlPath: string
  }
}

export const CardSubscription = ({ cardProps }: CardSubscriptionProps) => {
  const { handleGoToForm } = useSubscriptionEvent({
    urlPath: cardProps.urlPath,
  })

  return (
    <Card maxWidth="sm" minHeight="lg" bg="pampas.50" boxShadow="dark-lg">
      <CardBody p={0}>
        {cardProps.image}
        <Stack spacing={2} p={5}>
          <Heading as="h4" size="md">
            {cardProps.title}
          </Heading>
          <Text textAlign="justify">{cardProps.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter alignSelf="end" p={0} px={5} pb={5}>
        <Button onClick={handleGoToForm}>Inscrever</Button>
      </CardFooter>
    </Card>
  )
}

import { ReactNode } from 'react'

import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  CardFooter,
  Button,
  Badge,
} from '@chakra-ui/react'

import { useSubscriptionEvent } from './useSubscriptionEvent'

type CardSubscriptionProps = {
  cardProps: {
    image: ReactNode
    title: string
    description: string
    urlPath: string
    badgeText: string
  }
}

export const CardSubscription = ({ cardProps }: CardSubscriptionProps) => {
  const { handleGoToForm, isOpenSubscription } = useSubscriptionEvent({
    urlPath: cardProps.urlPath,
    badgeText: cardProps.badgeText,
  })

  return (
    <Card maxWidth="sm" minHeight="lg" bg="pampas.50" boxShadow="dark-lg">
      <CardBody p={0}>
        <Badge
          position="absolute"
          top={0}
          right={0}
          fontSize="xl"
          bg="flesh.200"
          borderTopRightRadius="md"
          textTransform="none"
          fontWeight={400}
        >
          {cardProps?.badgeText}
        </Badge>
        {cardProps.image}
        <Stack spacing={2} p={5}>
          <Heading as="h4" size="md">
            {cardProps.title}
          </Heading>
          <Text textAlign="justify">{cardProps.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter alignSelf="end" p={0} px={5} pb={5}>
        <Button isDisabled={!isOpenSubscription} onClick={handleGoToForm}>
          Inscrever
        </Button>
      </CardFooter>
    </Card>
  )
}

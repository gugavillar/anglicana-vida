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

import { useSubscriptionCard } from './useSubscriptionEvent'

type CardSubscriptionProps = {
  title: string
  urlPath: string
  badgeText: string
  year: string
  eventText: string
  cardProps: {
    image: ReactNode
    description: string
  }
}

export const SubscriptionCard = ({
  cardProps,
  urlPath,
  badgeText,
  title,
  eventText,
  year,
}: CardSubscriptionProps) => {
  const { handleGoToForm, isOpenSubscription } = useSubscriptionCard({
    urlPath,
    badgeText,
    eventText,
    year,
  })

  return (
    <Card maxWidth="sm" flexGrow={1} bg="pampas.50" boxShadow="dark-lg">
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
          {badgeText}
        </Badge>
        {cardProps.image}
        <Stack spacing={2} p={5}>
          <Heading as="h4" size="md">
            {title}
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

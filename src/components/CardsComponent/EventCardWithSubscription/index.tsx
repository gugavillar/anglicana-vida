import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  VStack,
  Text,
  Img,
  HStack,
  Button,
} from '@chakra-ui/react'

import { H4, IfComponent } from '@/components'

import { useEventCardWithSubscription } from './useEventCardWithSubscription'

export type SubscriptionCardProps = {
  subscriptionObjectProperty:
    | Content.SubscriptionVolunteersAndParticipantsDocument<string>
    | Content.SubscriptionDocument<string>
    | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text textAlign="justify">{children}</Text>,
}

export const EventCardWithSubscription = ({
  subscriptionObjectProperty,
}: SubscriptionCardProps) => {
  const subscription = useEventCardWithSubscription({
    subscriptionObjectProperty,
  })

  if (!subscription) return null

  const eventDate = subscription.isSameDate
    ? subscription?.formattedInitialDate
    : `${subscription?.formattedInitialDate} - ${subscription?.formattedFinalDate}`

  return (
    <Card
      maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }}
      flex={1}
      bg="pampas.50"
      boxShadow="md"
    >
      <CardBody p={0}>
        <Img
          src={subscriptionObjectProperty?.data?.image?.url as string}
          alt={subscriptionObjectProperty?.data?.image?.alt as string}
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          mx="auto"
        />
        <VStack align="flex-start" spacing={4} p={5}>
          <HStack justify="space-between" width="full">
            <Text opacity={0.65}>{eventDate}</Text>
            <IfComponent
              condition={subscription.isOpenSubscription}
              component={
                <Button
                  variant="ghost"
                  onClick={subscription.handleNavigateToSubscription}
                >
                  Ir para inscrição
                </Button>
              }
            />
          </HStack>
          <H4>{subscriptionObjectProperty?.data?.title}</H4>
          <PrismicRichText
            components={descriptionComponent}
            field={subscriptionObjectProperty?.data?.description}
          />
        </VStack>
      </CardBody>
    </Card>
  )
}

import { SubscriptionDocument } from '@/prismic-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  HStack,
  Button,
} from '@chakra-ui/react'

import { H4, IfComponent } from '@/components'

import { useEventCardWithSubscription } from './useEventCardWithSubscription'

type SubscriptionCardProps = {
  subscriptionObjectProperty: SubscriptionDocument<string>['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text textAlign="justify">{children}</Text>,
}

export const EventCardWithSubscription = ({
  subscriptionObjectProperty,
}: SubscriptionCardProps) => {
  const subscription = useEventCardWithSubscription(subscriptionObjectProperty)

  if (!subscription) return null

  return (
    <Card
      maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }}
      flex={1}
      bg="pampas.50"
      boxShadow="md"
    >
      <CardBody p={0}>
        <Image
          src={subscriptionObjectProperty?.image?.url as string}
          alt={subscriptionObjectProperty?.image?.alt as string}
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Stack spacing={2} p={5}>
          <HStack justify="space-between">
            <Text opacity={0.65}>
              {subscription?.formattedInitialDate} -{' '}
              {subscription?.formattedFinalDate}
            </Text>
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
          <H4>{subscriptionObjectProperty?.title}</H4>
          <PrismicRichText
            components={descriptionComponent}
            field={subscriptionObjectProperty?.description}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}

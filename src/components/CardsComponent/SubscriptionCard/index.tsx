import { SubscriptionDocument } from '@/prismic-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  Badge,
  HStack,
  Button,
} from '@chakra-ui/react'

import { H4, IfComponent } from '@/components'

import { useSubscriptionCard } from './useSubscriptionCard'

type SubscriptionCardProps = {
  subscriptionObjectProperty: SubscriptionDocument<string>['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text textAlign="justify">{children}</Text>,
}

export const SubscriptionCard = ({
  subscriptionObjectProperty,
}: SubscriptionCardProps) => {
  const subscription = useSubscriptionCard(subscriptionObjectProperty)

  if (!subscription) return null

  return (
    <Card
      maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }}
      minHeight="32.5rem"
      bg="pampas.50"
      boxShadow="md"
    >
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
          {subscription?.badgeText}
        </Badge>
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

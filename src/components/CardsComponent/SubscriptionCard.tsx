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

import { isFutureDate, isPassedDate, formatDate } from '@/formatters'

type SubscriptionCardProps = {
  subscriptionObjectProperty: SubscriptionDocument<string>['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text textAlign="justify">{children}</Text>,
}

const getBadgeText = (openDate: string, closeDate: string) => {
  if (isFutureDate(openDate)) return 'Em breve'

  if (isPassedDate(openDate) && isFutureDate(closeDate))
    return 'Inscrições abertas'

  return 'Inscrições encerradas'
}

export const SubscriptionCard = ({
  subscriptionObjectProperty,
}: SubscriptionCardProps) => {
  if (!subscriptionObjectProperty) return null

  const badgeText = getBadgeText(
    subscriptionObjectProperty.subscription_open_date as string,
    subscriptionObjectProperty.subscription_close_date as string,
  )

  const isOpenSubscription = badgeText === 'Inscrições abertas'

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
          {badgeText}
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
              {formatDate(subscriptionObjectProperty.initial_date as string)} -{' '}
              {formatDate(subscriptionObjectProperty.final_date as string)}
            </Text>
            <IfComponent
              condition={isOpenSubscription}
              component={<Button variant="ghost">Ir para inscrição</Button>}
            />
          </HStack>
          <H4>{subscriptionObjectProperty.title}</H4>
          <PrismicRichText
            components={descriptionComponent}
            field={subscriptionObjectProperty.description}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}

import { PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Badge,
  Link,
  HStack,
} from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'
import { isFutureDate, isPassedDate, formatDate } from '@/formatters'

import { SubscriptionDocument } from '../../../prismicio-types'
import { IfComponent } from '../IfComponent'

type SubscriptionCardProps = {
  data: SubscriptionDocument<string>['data']
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text fontFamily={roboto?.style?.fontFamily} textAlign="justify">
      {children}
    </Text>
  ),
}

const getBadgeText = (openDate: string, closeDate: string) => {
  if (isFutureDate(openDate)) return 'Em breve'

  if (isPassedDate(openDate) && isFutureDate(closeDate))
    return 'Inscrições abertas'

  return 'Inscrições encerradas'
}

export const SubscriptionCard = ({ data }: SubscriptionCardProps) => {
  const badgeText = getBadgeText(
    data.subscription_open_date as string,
    data.subscription_close_date as string,
  )

  const isOpenSubscription = badgeText === 'Inscrições abertas'

  return (
    <Card
      maxW={{ base: 'inherit', md: 'inherit', lg: 'sm' }}
      minHeight="lg"
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
          src={data?.image?.url as string}
          alt={data?.image?.alt as string}
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Stack spacing={1} p={5}>
          <HStack justify="space-between">
            <Text fontFamily={roboto?.style?.fontFamily} opacity={0.65}>
              {formatDate(data.initial_date as string)} -{' '}
              {formatDate(data.final_date as string)}
            </Text>
            <IfComponent
              condition={isOpenSubscription}
              component={
                <PrismicNextLink field={data.subscription_link}>
                  <Link as="span" cursor="pointer">
                    Inscrever
                  </Link>
                </PrismicNextLink>
              }
            />
          </HStack>
          <Heading as="h4" size="md" fontFamily={roboto?.style?.fontFamily}>
            {data.title}
          </Heading>
          <PrismicRichText
            components={descriptionComponent}
            field={data.description}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}

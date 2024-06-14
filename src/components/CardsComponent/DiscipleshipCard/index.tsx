import { memo } from 'react'

import { DiscipleshipDocument } from '@/prismic-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, Text, VStack, Flex, Icon } from '@chakra-ui/react'

import { Calendar, MapPin, UsersThree } from 'phosphor-react'

import { H4 } from '@/components'

type DiscipleshipCardProps = {
  discipleshipObjectProperty: DiscipleshipDocument['data'] | undefined
}

const addressComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text>{children}</Text>,
}

export const DiscipleshipCard = memo(
  ({ discipleshipObjectProperty }: DiscipleshipCardProps) => {
    if (!discipleshipObjectProperty) return null

    const biweeklyDiscipleship = discipleshipObjectProperty.biweekly
      ? ' - Quinzenalmente'
      : null

    return (
      <Card
        direction="row"
        boxShadow="base"
        borderStyle="inset"
        borderBottom="8px solid"
        borderBottomColor="gray.700"
        flexGrow={1}
      >
        <CardBody>
          <VStack align="flex-start" justify="space-between" height="100%">
            <H4>{discipleshipObjectProperty.title}</H4>
            <Flex align="center" gap={2}>
              <Icon as={Calendar} width={6} height={6} />
              <Text>
                {discipleshipObjectProperty.week_day} às{' '}
                {discipleshipObjectProperty.schedule} {biweeklyDiscipleship}
              </Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={UsersThree} width={6} height={6} />
              <Text>{discipleshipObjectProperty.leader}</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={MapPin} width={6} height={6} />
              <VStack align="flex-start" spacing={0}>
                <PrismicRichText
                  components={addressComponent}
                  field={discipleshipObjectProperty.address}
                />
              </VStack>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    )
  },
)

DiscipleshipCard.displayName = 'DiscipleshipCard'

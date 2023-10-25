import { memo } from 'react'

import { DiscipleshipDocument } from '@/prismic-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, Text, VStack, Flex } from '@chakra-ui/react'

import deepEqual from 'deep-equal'
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
          <VStack align="flex-start" spacing={4}>
            <H4>{discipleshipObjectProperty.title}</H4>
            <Flex align="center" gap={2}>
              <Calendar size={24} />
              <Text>
                {discipleshipObjectProperty.week_day} às{' '}
                {discipleshipObjectProperty.schedule} {biweeklyDiscipleship}
              </Text>
            </Flex>
            <Flex align="center" gap={2}>
              <MapPin size={24} />
              <VStack align="flex-start" spacing={0}>
                <PrismicRichText
                  components={addressComponent}
                  field={discipleshipObjectProperty.address}
                />
              </VStack>
            </Flex>
            <Flex align="center" gap={2}>
              <UsersThree size={24} />
              <Text>{discipleshipObjectProperty.leader}</Text>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    )
  },
  (prevProps, nextProps) =>
    deepEqual(
      prevProps.discipleshipObjectProperty,
      nextProps.discipleshipObjectProperty,
    ),
)

DiscipleshipCard.displayName = 'DiscipleshipCard'

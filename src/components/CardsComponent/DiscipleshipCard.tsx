import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Card, CardBody, Stack, Text, VStack, Flex } from '@chakra-ui/react'
import { Calendar, MapPin, UsersThree } from 'phosphor-react'

import { H4 } from '@/components'

import { DiscipleshipDocument } from '../../../prismicio-types'

type DiscipleshipCardProps = {
  discipleshipObjectProperty: DiscipleshipDocument['data'] | undefined
}

const addressComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text>{children}</Text>,
}

export const DiscipleshipCard = ({
  discipleshipObjectProperty,
}: DiscipleshipCardProps) => {
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
      minHeight="16.25rem"
    >
      <Stack>
        <CardBody>
          <H4>{discipleshipObjectProperty.title}</H4>
          <VStack align="flex-start" mt={6} spacing={2}>
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
      </Stack>
    </Card>
  )
}

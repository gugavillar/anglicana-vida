import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { Calendar, MapPin, UsersThree } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'

import { DiscipleshipDocument } from '../../../prismicio-types'

type DiscipleshipCardProps = {
  data: DiscipleshipDocument['data']
}

const addressComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text fontFamily={roboto?.style?.fontFamily}>{children}</Text>
  ),
}

export const DiscipleshipCard = ({ data }: DiscipleshipCardProps) => {
  return (
    <Card
      direction="row"
      boxShadow="base"
      borderStyle="inset"
      borderBottom="8px solid"
      borderBottomColor="cinder.700"
      minHeight={260}
    >
      <Stack>
        <CardBody>
          <Heading as="h4" size="md" fontFamily={roboto?.style?.fontFamily}>
            {data.title}
          </Heading>
          <VStack align="flex-start" mt={6} spacing={2}>
            <Flex align="center" gap={2}>
              <Calendar size={24} />
              <Text fontFamily={roboto?.style?.fontFamily}>
                {data.week_day} às {data.schedule}{' '}
                {data.biweekly ? ' - Quinzenalmente' : null}
              </Text>
            </Flex>
            <Flex align="center" gap={2}>
              <MapPin size={24} />
              <VStack align="flex-start" spacing={0}>
                <PrismicRichText
                  components={addressComponent}
                  field={data.address}
                />
              </VStack>
            </Flex>
            <Flex align="center" gap={2}>
              <UsersThree size={24} />
              <Text fontFamily={roboto?.style?.fontFamily}>{data.leader}</Text>
            </Flex>
          </VStack>
        </CardBody>
      </Stack>
    </Card>
  )
}

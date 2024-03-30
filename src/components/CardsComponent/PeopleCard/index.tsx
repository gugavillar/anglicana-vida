import { PeopleDocument } from '@/prismic-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Img,
  VStack,
} from '@chakra-ui/react'

import { SocialMedia } from './SocialMedia'

type PeopleCardProps = {
  data: PeopleDocument['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text textAlign="center">{children}</Text>,
}

export const PeopleCard = ({ data }: PeopleCardProps) => {
  return (
    <Card
      width="full"
      maxW="md"
      flex={1}
      boxShadow="lg"
      mx="auto"
      bg="white"
      borderRadius={40}
    >
      <CardHeader pt={2} pb={0}>
        <Flex
          textAlign="center"
          flexDirection="column"
          bg="blackAlpha.50"
          borderTopRadius={40}
          maxWidth="sm"
          mx="auto"
          clipPath="polygon(0 0, 100% 0%, 100% 60%, 50% 100%, 0 60%)"
          py={6}
        >
          <Text fontWeight="bold" fontSize="xl">
            {data?.name}
          </Text>
          <Img
            src={data?.image?.url as string}
            alt={data?.image?.alt as string}
            height="9rem"
            borderRadius={80}
            mx="auto"
          />
        </Flex>
      </CardHeader>
      <CardBody px={5} py={4}>
        <VStack align="center" spacing={4} mt="auto" height="full">
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            {data?.role}
          </Text>
          <PrismicRichText
            components={descriptionComponent}
            field={data?.description}
          />
          <SocialMedia socialMedia={data?.social_media} />
        </VStack>
      </CardBody>
    </Card>
  )
}

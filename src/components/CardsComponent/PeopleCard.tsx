import { PeopleDocument } from '@/prismic-types'
import { PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Text,
  Image,
} from '@chakra-ui/react'

import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import { IfComponent } from '../IfComponent'

type PeopleCardProps = {
  data: PeopleDocument['data'] | undefined
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => <Text>{children}</Text>,
}

export const PeopleCard = ({ data }: PeopleCardProps) => {
  return (
    <Card
      maxW="lg"
      flex={1}
      boxShadow="lg"
      mx="auto"
      width="full"
      bg="white"
      height="30rem"
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
          <Image
            src={data?.image?.url as string}
            alt={data?.image?.alt as string}
            maxWidth="7rem"
            minHeight="10rem"
            maxHeight="10rem"
            borderRadius="full"
            mx="auto"
          />
        </Flex>
      </CardHeader>
      <CardBody px={5} py={4} maxHeight="9rem">
        <Flex textAlign="center" flexDirection="column" gap="1rem">
          <Text fontWeight="bold" fontSize="xl">
            {data?.role}
          </Text>
          <PrismicRichText
            components={descriptionComponent}
            field={data?.description}
          />
        </Flex>
      </CardBody>
      <CardFooter pb={0} mx="auto">
        <HStack spacing={6}>
          {data?.social_media?.map((media) => (
            <>
              <IfComponent
                condition={media.instagram_profile.link_type === 'Web'}
                component={
                  <PrismicNextLink
                    field={media.instagram_profile}
                    target="_blank"
                  >
                    <InstagramLogo size={40} />
                  </PrismicNextLink>
                }
              />
              <IfComponent
                condition={media.facebook_profile.link_type === 'Web'}
                component={
                  <PrismicNextLink
                    field={media.facebook_profile}
                    target="_blank"
                  >
                    <FacebookLogo size={40} />
                  </PrismicNextLink>
                }
              />
            </>
          ))}
        </HStack>
      </CardFooter>
    </Card>
  )
}

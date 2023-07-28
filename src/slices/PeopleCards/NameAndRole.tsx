import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Flex, Heading, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { Simplify } from '../../../prismicio-types'

type NameAndRoleProps = {
  item: Simplify<Content.PeopleCardsSlice>['items'][number]
}

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      textTransform="uppercase"
      color="cinder.950"
      fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
    >
      {children}
    </Heading>
  ),
}

const roleComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      fontFamily={roboto?.style?.fontFamily}
      color="cinder.950"
      lineHeight="24px"
      opacity={0.69}
    >
      {children}
    </Text>
  ),
}

export const NameAndRole = ({ item: { heading, role } }: NameAndRoleProps) => {
  return (
    <Flex direction="column" align="center" justify="center" mt={6} gap={2}>
      <PrismicRichText components={headingComponent} field={heading} />
      <PrismicRichText components={roleComponent} field={role} />
    </Flex>
  )
}

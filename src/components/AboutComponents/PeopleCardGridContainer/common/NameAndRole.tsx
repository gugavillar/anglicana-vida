import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Flex, Heading, Text, VStack } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { PeopleCardType } from '../../about'

type NameAndRoleProps = {
  item: PeopleCardType
}

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      as="h5"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
      fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }}
    >
      {children}
    </Heading>
  ),
}

const roleComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize="sm"
      fontFamily={roboto?.style?.fontFamily}
      color="cinder.950"
      opacity={0.69}
    >
      {children}
    </Text>
  ),
}

const departmentComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize="md"
      fontFamily={roboto?.style?.fontFamily}
      color="cinder.950"
    >
      {children}
    </Text>
  ),
}

export const NameAndRole = ({
  item: { heading, role, department, church },
}: NameAndRoleProps) => {
  return (
    <Flex direction="column" align="center" justify="center" gap={4}>
      <VStack spacing={0}>
        <PrismicRichText components={roleComponent} field={role} />
        <PrismicRichText components={headingComponent} field={heading} />
      </VStack>
      <VStack spacing={0}>
        <PrismicRichText components={departmentComponent} field={department} />
        <PrismicRichText components={roleComponent} field={church} />
      </VStack>
    </Flex>
  )
}

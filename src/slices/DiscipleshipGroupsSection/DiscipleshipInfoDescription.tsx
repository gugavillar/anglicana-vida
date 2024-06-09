import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import {
  VStack,
  Text,
  List,
  ListItem,
  Link,
  ListIcon,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react'

import { PhoneCall } from 'phosphor-react'

import { H3 } from '@/components'

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text lineHeight="30px" fontSize="lg" textAlign="justify" textIndent="3rem">
      {children}
    </Text>
  ),
}

const listComponent: JSXMapSerializer = {
  list: ({ children }) => (
    <List spacing={2} fontSize="lg" textAlign="justify">
      {children}
    </List>
  ),
  listItem: ({ children, node }) => {
    if (!node.text) return null
    const number = node.text.replace(/\D/g, '')
    return (
      <ListItem
        _hover={{
          color: 'flesh.400',
          transition: 'color 0.3s',
        }}
      >
        <ListIcon as={PhoneCall} />
        <Link _hover={{ textDecoration: 'none' }} href={`tel:0${number}`}>
          {children}
        </Link>
      </ListItem>
    )
  },
}

type DiscipleshipInfoDescriptionProps = {
  title: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice']['primary']['title']
  image: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice']['primary']['image']
  description: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice']['primary']['description']
  phones: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice']['primary']['phones']
}

export const DiscipleshipInfoDescription = ({
  image,
  title,
  description,
  phones,
}: DiscipleshipInfoDescriptionProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} mx="auto" spacing={8}>
      <GridItem order={{ base: 2, md: 2, lg: 1 }} alignSelf="center">
        <VStack maxWidth={{ base: 'full', md: '40rem', lg: 'full' }}>
          <H3 mb={0}>{title}</H3>
          <PrismicRichText
            components={descriptionComponent}
            field={description}
          />
          <PrismicRichText components={listComponent} field={phones} />
        </VStack>
      </GridItem>
      <GridItem alignSelf="center" order={{ base: 1, md: 1, lg: 2 }}>
        <PrismicNextImage
          field={image}
          style={{
            borderRadius: 8,
            width: '100%',
            maxHeight: '480px',
          }}
        />
      </GridItem>
    </SimpleGrid>
  )
}

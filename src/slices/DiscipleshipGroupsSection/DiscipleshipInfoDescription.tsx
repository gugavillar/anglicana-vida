import type { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import {
  HStack,
  VStack,
  Img,
  Text,
  List,
  ListItem,
  Link,
  ListIcon,
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
    <HStack
      spacing={8}
      mx="auto"
      flexDirection={{
        base: 'column-reverse',
        md: 'column-reverse',
        lg: 'row',
      }}
    >
      <VStack maxWidth={{ base: 'full', md: '40rem', lg: 'full' }}>
        <H3 mb={0}>{title}</H3>
        <PrismicRichText
          components={descriptionComponent}
          field={description}
        />
        <PrismicRichText components={listComponent} field={phones} />
      </VStack>
      <Img
        maxHeight={414}
        borderRadius={8}
        src={image?.url as string}
        alt={image?.alt as string}
      />
    </HStack>
  )
}

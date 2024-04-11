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
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react'

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
    <UnorderedList spacing={2} fontSize="lg" textAlign="justify">
      {children}
    </UnorderedList>
  ),
  listItem: ({ children, node }) => {
    if (!node.text) return null
    const number = node.text.replace(/\D/g, '')
    return (
      <ListItem>
        <Link href={`tel:0${number}`}>{children}</Link>
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

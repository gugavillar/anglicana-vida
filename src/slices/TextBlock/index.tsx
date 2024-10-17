import type { Content } from '@prismicio/client'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { Flex, Text, UnorderedList } from '@chakra-ui/react'

import { ContentContainer, H3 } from '@/components'

export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text lineHeight="30px" fontSize="lg" textAlign="justify" textIndent="3rem">
      {children}
    </Text>
  ),
  list: ({ children }) => (
    <UnorderedList spacing={2} fontSize="lg" textAlign="justify">
      {children}
    </UnorderedList>
  ),
}

const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <ContentContainer id="textBlock">
      <Flex direction="column" maxWidth="45rem" mx="auto">
        <H3>{slice.primary.heading}</H3>
        <PrismicRichText
          components={descriptionComponent}
          field={slice.primary.paragraph}
        />
      </Flex>
    </ContentContainer>
  )
}

export default TextBlock

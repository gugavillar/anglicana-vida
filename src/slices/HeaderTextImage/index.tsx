import type { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { HStack, Img, Text, VStack } from '@chakra-ui/react'

import { ContentContainer, H3, IfComponent } from '@/components'

type HeaderTextProps = SliceComponentProps<Content.HeaderTextSlice>

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text lineHeight="30px" fontSize="lg" textAlign="justify" textIndent="3rem">
      {children}
    </Text>
  ),
}

const HeaderText = ({ slice }: HeaderTextProps): JSX.Element => {
  return (
    <ContentContainer id="headerImage">
      <HStack
        spacing={8}
        mx="auto"
        flexDirection={{
          base: 'column',
          md: 'column',
          lg: 'row-reverse',
        }}
      >
        <VStack maxWidth={{ base: 'full', md: '40rem', lg: 'full' }}>
          <H3 mb={0}>{slice?.primary?.title}</H3>
          <PrismicRichText
            components={descriptionComponent}
            field={slice?.primary?.description}
          />
        </VStack>
        <IfComponent
          condition={!!slice?.primary?.image?.url as boolean}
          component={
            <Img
              borderRadius={8}
              maxHeight={300}
              src={slice?.primary?.image?.url as string}
              alt={slice?.primary?.image?.alt as string}
            />
          }
        />
      </HStack>
    </ContentContainer>
  )
}

export default HeaderText

import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Text, VStack, SimpleGrid, GridItem } from '@chakra-ui/react'

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
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8} mx="auto">
        <GridItem alignSelf="center" order={{ base: 1, md: 1, lg: 2 }}>
          <VStack maxWidth={{ base: 'full', md: '40rem', lg: 'full' }}>
            <H3 mb={0}>{slice?.primary?.title}</H3>
            <PrismicRichText
              components={descriptionComponent}
              field={slice?.primary?.description}
            />
          </VStack>
        </GridItem>
        <GridItem alignSelf="center" order={{ base: 2, md: 2, lg: 1 }}>
          <IfComponent
            condition={!!slice?.primary?.image?.url as boolean}
            component={
              <PrismicNextImage
                field={slice?.primary?.image}
                style={{ borderRadius: 8, maxWidth: '640px', width: '100%' }}
              />
            }
          />
        </GridItem>
      </SimpleGrid>
    </ContentContainer>
  )
}

export default HeaderText

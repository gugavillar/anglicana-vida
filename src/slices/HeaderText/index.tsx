import type { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { roboto } from '@/fonts/roboto'

export type HeaderTextProps = SliceComponentProps<Content.HeaderTextSlice>

const headingComponent: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      textTransform="uppercase"
      fontSize={{ base: 'xl', md: '5xl', lg: '5xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const subHeadingComponent: JSXMapSerializer = {
  heading6: ({ children }) => (
    <Heading
      as="h6"
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      lineHeight="24px"
      color="cinder.950"
      textAlign="center"
      mt={8}
    >
      {children}
    </Text>
  ),
}

const HeaderText = ({ slice }: HeaderTextProps): JSX.Element => {
  return (
    <SliceContainer>
      <Box as="header" maxW="48rem" mx="auto" px={6}>
        <VStack spacing={4} textAlign="center">
          {slice?.variation !== 'withoutSubHeading' ? (
            <PrismicRichText
              components={subHeadingComponent}
              field={slice?.primary?.sub_heading}
            />
          ) : null}
          <PrismicRichText
            components={headingComponent}
            field={slice?.primary?.heading}
          />
        </VStack>
        {slice?.variation === 'withDescription' ? (
          <PrismicRichText
            components={descriptionComponent}
            field={slice?.primary?.description}
          />
        ) : null}
      </Box>
    </SliceContainer>
  )
}

export default HeaderText

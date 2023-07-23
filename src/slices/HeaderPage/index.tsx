import type { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Flex, Heading, Box } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

export type HeaderPageProps = SliceComponentProps<Content.HeaderPageSlice>

const heading: JSXMapSerializer = {
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

const subHeading: JSXMapSerializer = {
  heading6: ({ children }) => (
    <Heading
      as="h6"
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      mb={4}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const HeaderPage = ({ slice }: HeaderPageProps): JSX.Element => {
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      maxW="75rem"
      direction="column"
      mx="auto"
      my={12}
    >
      <Box textAlign="center" maxW="35.3125rem" px={6}>
        {slice?.variation === 'default' ? (
          <PrismicRichText
            components={subHeading}
            field={slice.primary?.sub_heading}
          />
        ) : null}
        <PrismicRichText components={heading} field={slice.primary.heading} />
      </Box>
    </Flex>
  )
}

export default HeaderPage

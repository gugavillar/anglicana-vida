import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Box, Heading, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { LiveSermonDocument } from '../../../../prismicio-types'

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      as="h4"
      textTransform="uppercase"
      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
      mb={4}
    >
      {children}
    </Heading>
  ),
}

const quoteComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      borderLeft="3px solid"
      borderColor="cinder.500"
      pl={5}
      py={3}
      fontFamily={roboto?.style?.fontFamily}
      lineHeight={{ base: '24px', md: '28px', lg: '36px' }}
      fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
    >
      {children}
    </Text>
  ),
}

type TextVideoBoxProps = {
  data: LiveSermonDocument['data']
}

export const TextVideoBox = ({
  data: { heading, quote },
}: TextVideoBoxProps) => {
  return (
    <Box
      minWidth={{ base: 'full', md: '50%', lg: '40%' }}
      py={{ base: 4, md: 4, lg: 6 }}
      color="cinder.950"
      mt={{ base: 6, md: 0, lg: 0 }}
      ml={{ base: 0, md: 6, lg: 6 }}
    >
      <PrismicRichText components={headingComponent} field={heading} />
      <PrismicRichText components={quoteComponent} field={quote} />
    </Box>
  )
}

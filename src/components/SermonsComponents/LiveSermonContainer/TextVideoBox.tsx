import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Box, Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { LiveSermonDocument } from '../../../../prismicio-types'

const headingComponent: JSXMapSerializer = {
  heading4: ({ children }) => (
    <Heading
      as="h4"
      textTransform="uppercase"
      fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

type TextVideoBoxProps = {
  data: LiveSermonDocument['data']
}

export const TextVideoBox = ({
  data: { heading, quote },
}: TextVideoBoxProps) => {
  return (
    <Box minWidth={{ base: 'full', md: '50%', lg: '40%' }} p={6}>
      <PrismicRichText components={headingComponent} field={heading} />
      <PrismicRichText field={quote} />
    </Box>
  )
}

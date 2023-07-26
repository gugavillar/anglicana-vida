import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Flex, Heading } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import type { RegisterEventSlice, Simplify } from '../../../prismicio-types'

type HeaderProps = {
  primary: Simplify<RegisterEventSlice>['primary']
}

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
      mb={4}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

export const Header = ({
  primary: { heading, sub_heading: subHeading },
}: HeaderProps) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      gap={4}
      direction="column"
      maxW="38.75rem"
      mb={16}
      mx="auto"
      textAlign="center"
    >
      <PrismicRichText components={subHeadingComponent} field={subHeading} />
      <PrismicRichText components={headingComponent} field={heading} />
    </Flex>
  )
}

export default Header

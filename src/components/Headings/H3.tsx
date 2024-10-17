import type * as prismic from '@prismicio/client'

import { Heading, type HeadingProps } from '@chakra-ui/react'

type H3Props = HeadingProps & {
  children: prismic.KeyTextField
}

export const H3 = ({ children, ...props }: H3Props) => {
  return (
    <Heading
      as="h3"
      variant="subTitle"
      alignSelf="center"
      textAlign="center"
      mb={8}
      {...props}
    >
      {children}
    </Heading>
  )
}

import type * as prismic from '@prismicio/client'

import { Heading, type HeadingProps } from '@chakra-ui/react'

type H4Props = HeadingProps & {
  children: prismic.KeyTextField | undefined
}

export const H4 = ({ children, ...props }: H4Props) => {
  return (
    <Heading as="h4" variant="cardTitle" {...props}>
      {children}
    </Heading>
  )
}

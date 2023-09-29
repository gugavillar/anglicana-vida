import { KeyTextField } from '@prismicio/client'

import { Heading, HeadingProps } from '@chakra-ui/react'

type H4Props = HeadingProps & {
  children: KeyTextField | undefined
}

export const H4 = ({ children, ...props }: H4Props) => {
  return (
    <Heading as="h4" variant="cardTitle" {...props}>
      {children}
    </Heading>
  )
}

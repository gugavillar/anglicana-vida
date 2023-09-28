import { KeyTextField } from '@prismicio/types'

import { Heading, HeadingProps } from '@chakra-ui/react'

type H3Props = HeadingProps & {
  children: KeyTextField
}

export const H3 = ({ children }: H3Props) => {
  return (
    <Heading
      as="h3"
      variant="subTitle"
      alignSelf="center"
      textAlign="center"
      mb={4}
    >
      {children}
    </Heading>
  )
}

import { KeyTextField } from '@prismicio/types'

import { Heading, HeadingProps } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

type H3Props = HeadingProps & {
  children: KeyTextField
}

export const H3 = ({ children }: H3Props) => {
  return (
    <Heading
      as="h3"
      alignSelf="center"
      textAlign="center"
      mb={4}
      fontFamily={roboto.style.fontFamily}
    >
      {children}
    </Heading>
  )
}

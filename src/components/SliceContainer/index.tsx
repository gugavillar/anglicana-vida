import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

type SliceContainerProps = {
  children: ReactNode
}
export const SliceContainer = ({ children }: SliceContainerProps) => {
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      maxW="75rem"
      direction="column"
      mx="auto"
      mt={12}
    >
      {children}
    </Flex>
  )
}

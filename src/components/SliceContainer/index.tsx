import { ReactNode } from 'react'

import { Flex, Box } from '@chakra-ui/react'

type SliceContainerProps = {
  children: ReactNode
  isBoxContainer?: boolean
}
export const SliceContainer = ({
  children,
  isBoxContainer,
}: SliceContainerProps) => {
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
      {isBoxContainer ? <Box px={6}>{children}</Box> : children}
    </Flex>
  )
}

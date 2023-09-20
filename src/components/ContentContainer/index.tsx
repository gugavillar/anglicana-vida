import { PropsWithChildren } from 'react'

import { Box, BoxProps, Flex } from '@chakra-ui/react'

type ContentContainerProps = BoxProps & PropsWithChildren

export const ContentContainer = ({
  children,
  ...props
}: ContentContainerProps) => {
  return (
    <Box as="section" {...props}>
      <Flex
        maxW="75rem"
        align="flex-start"
        justify="center"
        flexDir="column"
        mx="auto"
        p={8}
      >
        {children}
      </Flex>
    </Box>
  )
}

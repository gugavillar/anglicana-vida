import { CircularProgress, Flex } from '@chakra-ui/react'

import { Logo } from '@/components/Icons'

export const PageLoader = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      width="full"
      align="center"
      justify="center"
      position="relative"
    >
      <Logo fill="#18224a" position="absolute" />
      <CircularProgress isIndeterminate size={24} thickness="4px" />
    </Flex>
  )
}

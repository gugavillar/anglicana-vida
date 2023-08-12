import { ReactNode } from 'react'

import { Flex, Box } from '@chakra-ui/react'

type SliceContainerProps = {
  children: ReactNode
  isBoxContainer?: boolean
  isColorSlice?: boolean
}

const colorSliceProps = {
  width: 'full',
  bg: 'pampas.100',
  py: 4,
}

export const SliceContainer = ({
  children,
  isBoxContainer,
  isColorSlice,
}: SliceContainerProps) => {
  console.log()
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      direction="column"
      mx="auto"
      mt={12}
      {...(isColorSlice ? { ...colorSliceProps } : { maxW: '75rem' })}
    >
      {isBoxContainer ? (
        <Box px={6} {...(isColorSlice && { maxWidth: '75rem' })}>
          {children}
        </Box>
      ) : (
        children
      )}
    </Flex>
  )
}

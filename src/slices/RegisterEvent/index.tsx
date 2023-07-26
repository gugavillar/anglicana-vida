import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Flex, Box } from '@chakra-ui/react'

import { EventBlockContainer } from './EventBlock'
import { Header } from './Header'

export type RegisterEventProps = SliceComponentProps<Content.RegisterEventSlice>

const RegisterEvent = ({ slice }: RegisterEventProps): JSX.Element => {
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      maxW="75rem"
      direction="column"
      mx="auto"
      my={12}
    >
      <Box px={6}>
        <Header primary={slice.primary} />
        <EventBlockContainer items={slice?.items} />
      </Box>
    </Flex>
  )
}

export default RegisterEvent

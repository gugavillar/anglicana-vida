import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Flex } from '@chakra-ui/react'

import { EventBlockContainer } from './EventBlock'
import { Header } from './Header'

export type RegisterEventProps = SliceComponentProps<Content.RegisterEventSlice>

const RegisterEvent = ({ slice }: RegisterEventProps): JSX.Element => {
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      direction="column"
      mx="auto"
      maxWidth="80rem"
      my={12}
    >
      <Header primary={slice.primary} />
      <EventBlockContainer items={slice?.items} />
    </Flex>
  )
}

export default RegisterEvent

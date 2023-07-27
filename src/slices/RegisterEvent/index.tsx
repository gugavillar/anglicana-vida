import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Box } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { EventBlockContainer } from './EventBlock'

export type RegisterEventProps = SliceComponentProps<Content.RegisterEventSlice>

const RegisterEvent = ({ slice }: RegisterEventProps): JSX.Element => {
  return (
    <SliceContainer>
      <Box px={6}>
        <EventBlockContainer items={slice?.items} />
      </Box>
    </SliceContainer>
  )
}

export default RegisterEvent

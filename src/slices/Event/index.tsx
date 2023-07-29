import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Box } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { DefaultEvent } from './DefaultEvent'
import { RegistrationEvent } from './RegistrationEvent'

export type EventCardsProps = SliceComponentProps<Content.EventCardsSlice>

const Event = ({ slice }: EventCardsProps): JSX.Element => {
  return (
    <SliceContainer>
      <Box px={6}>
        {slice?.variation === 'default' ? (
          <DefaultEvent items={slice.items} />
        ) : (
          <RegistrationEvent items={slice.items} />
        )}
      </Box>
    </SliceContainer>
  )
}

export default Event

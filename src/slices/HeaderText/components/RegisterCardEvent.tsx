import type { Content } from '@prismicio/client'

import { EventRegisterContainer } from '@/components/EventsComponents/EventRegisterContainer'
import { SliceContainer } from '@/components/SliceContainer'

import { RegisterCardEventDocument } from '../../../../prismicio-types'

type RegisterCardEventProps = {
  registerCardEvents: RegisterCardEventDocument<string>[]
  variation: Content.HeaderTextSlice['variation']
}

export const RegisterCardEvent = ({
  registerCardEvents,
  variation,
}: RegisterCardEventProps) => {
  if (!registerCardEvents?.length || variation !== 'withRegisterCardEvent')
    return null

  const items = registerCardEvents?.map((item) => ({ ...item.data }))
  return (
    <SliceContainer isBoxContainer>
      <EventRegisterContainer items={items} />
    </SliceContainer>
  )
}

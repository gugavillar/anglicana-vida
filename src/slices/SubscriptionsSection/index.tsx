import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { ContentContainer, H3 } from '@/components'

type SubscriptionSectionProps =
  SliceComponentProps<Content.SubscriptionSectionSlice>

const SubscriptionSection = ({
  slice,
}: SubscriptionSectionProps): JSX.Element => {
  return (
    <ContentContainer>
      <H3>{slice?.primary?.title}</H3>
    </ContentContainer>
  )
}

export default SubscriptionSection

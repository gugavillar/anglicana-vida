import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  EventCardWithSubscription,
  H3,
  SwiperContainerCards,
} from '@/components'

import { breakPointObject } from '@/constants'

import { useSubscriptions } from './useSubscriptions'

type SubscriptionSectionProps =
  SliceComponentProps<Content.SubscriptionSectionSlice>

const SubscriptionSection = ({
  slice,
}: SubscriptionSectionProps): JSX.Element => {
  const { subscriptions } = useSubscriptions(slice)

  return (
    <ContentContainer id="subscriptions">
      <H3>{slice?.primary?.title}</H3>
      <SwiperContainerCards
        isLoaded={!!subscriptions?.length}
        breakPointObject={breakPointObject}
      >
        {subscriptions?.map((item) => (
          <SwiperSlide key={item?.id} style={{ display: 'flex', flexGrow: 1 }}>
            <EventCardWithSubscription subscriptionObjectProperty={item} />
          </SwiperSlide>
        ))}
      </SwiperContainerCards>
    </ContentContainer>
  )
}

export default SubscriptionSection

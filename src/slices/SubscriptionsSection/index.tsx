import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  EventCardWithSubscription,
  H3,
  SwiperContainerCards,
} from '@/components'

import { useSubscriptions } from './useSubscriptions'

type SubscriptionSectionProps =
  SliceComponentProps<Content.SubscriptionSectionSlice>

const breakPointObject = {
  base: 1,
  md: 2,
  lg: 3,
}

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
        flex={1}
      >
        {subscriptions?.map((item) => (
          <SwiperSlide key={item?.id}>
            <EventCardWithSubscription
              subscriptionObjectProperty={item?.data}
            />
          </SwiperSlide>
        ))}
      </SwiperContainerCards>
    </ContentContainer>
  )
}

export default SubscriptionSection

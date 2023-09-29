import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Skeleton, useBreakpointValue } from '@chakra-ui/react'

import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  H3,
  SubscriptionCard,
  SwiperContainer,
} from '@/components'

import { useSubscriptions } from './useSubscriptions'

type SubscriptionSectionProps =
  SliceComponentProps<Content.SubscriptionSectionSlice>

const SubscriptionSection = ({
  slice,
}: SubscriptionSectionProps): JSX.Element => {
  const slidesPerView = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  })

  const { subscriptions } = useSubscriptions(slice)

  return (
    <ContentContainer id="subscriptions">
      <H3>{slice?.primary?.title}</H3>
      <Skeleton
        isLoaded={!!subscriptions?.length}
        maxWidth="inherit"
        minWidth="full"
        alignSelf="center"
        height="xl"
      >
        <SwiperContainer
          slidesPerView={slidesPerView}
          spaceBetween={25}
          isAutoplay
        >
          {subscriptions?.map((item) => (
            <SwiperSlide key={item?.id}>
              <SubscriptionCard subscriptionObjectProperty={item?.data} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Skeleton>
    </ContentContainer>
  )
}

export default SubscriptionSection

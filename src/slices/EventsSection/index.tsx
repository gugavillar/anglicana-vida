import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Skeleton, useBreakpointValue } from '@chakra-ui/react'

import { SwiperSlide } from 'swiper/react'

import { ContentContainer, H3, SwiperContainer, EventCard } from '@/components'

import { useEvents } from './useEvents'

type EventsSectionProps = SliceComponentProps<Content.EventsSectionSlice>

const EventsSection = ({ slice }: EventsSectionProps): JSX.Element => {
  const slidesPerView = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  })
  const { events } = useEvents(slice)

  return (
    <ContentContainer id="events" bg="pampas.50">
      <H3>{slice?.primary?.title}</H3>
      <Skeleton
        isLoaded={!!events?.length}
        height="lg"
        maxWidth="inherit"
        alignSelf="center"
        minWidth="full"
      >
        <SwiperContainer
          slidesPerView={slidesPerView}
          spaceBetween={25}
          isAutoplay
        >
          {events?.map((item) => (
            <SwiperSlide key={item?.id}>
              <EventCard eventObjectProperty={item?.data} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Skeleton>
    </ContentContainer>
  )
}

export default EventsSection

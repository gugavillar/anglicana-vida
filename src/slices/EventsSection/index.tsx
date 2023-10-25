import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  H3,
  EventCard,
  SwiperContainerCards,
} from '@/components'

import { useEvents } from './useEvents'

type EventsSectionProps = SliceComponentProps<Content.EventsSectionSlice>

const breakPointObject = {
  base: 1,
  md: 2,
  lg: 3,
}

const EventsSection = ({ slice }: EventsSectionProps): JSX.Element => {
  const { events } = useEvents(slice)

  return (
    <ContentContainer id="events" bg="pampas.50">
      <H3>{slice?.primary?.title}</H3>
      <SwiperContainerCards
        breakPointObject={breakPointObject}
        isLoaded={!!events?.length}
      >
        {events?.map((item) => (
          <SwiperSlide key={item?.id} style={{ display: 'flex', flexGrow: 1 }}>
            <EventCard eventObjectProperty={item?.data} />
          </SwiperSlide>
        ))}
      </SwiperContainerCards>
    </ContentContainer>
  )
}

export default EventsSection

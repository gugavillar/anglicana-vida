import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'
import { isFilled, type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Skeleton, useBreakpointValue, useToast } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import { ContentContainer, H3, SwiperContainer, EventCard } from '@/components'

import { EventDocument } from '../../../prismicio-types'

type EventsSectionProps = SliceComponentProps<Content.EventsSectionSlice>

const EventsSection = ({ slice }: EventsSectionProps): JSX.Element => {
  const [events, setEvents] = useState<Array<EventDocument<string>>>([])

  const slidesPerView = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  })
  const client = createClient()
  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await Promise.all(
          slice?.items?.map(async (item) => {
            if (!isFilled.contentRelationship(item?.events)) return
            return await client.getByUID('event', item?.events?.uid as string)
          }),
        )
        setEvents(data as Array<EventDocument<string>>)
      } catch {
        toast({
          status: 'error',
          description: 'Falha ao carregar os eventos.',
        })
      }
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              <EventCard data={item?.data} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Skeleton>
    </ContentContainer>
  )
}

export default EventsSection

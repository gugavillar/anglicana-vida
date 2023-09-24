import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Skeleton, useBreakpointValue } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import { ContentContainer, H3, SwiperContainer, VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

type SermonsSectionsProps = SliceComponentProps<
  Content.SermonsSectionsSlice,
  GetAllVideosFromChannelResponse
>

const SermonsSections = ({
  slice,
  context,
}: SermonsSectionsProps): JSX.Element => {
  const slidesPerView = useBreakpointValue(
    {
      base: 1,
      md: 2,
      lg: 2,
    },
    {
      fallback: '',
    },
  )

  return (
    <ContentContainer id="sermons">
      <H3>{slice.primary.title}</H3>
      <Skeleton
        isLoaded={!!slidesPerView}
        height={{ base: 380, md: 500, lg: 480 }}
        maxWidth="inherit"
        mx="auto"
        minWidth="full"
      >
        <SwiperContainer
          slidesPerView={slidesPerView}
          spaceBetween={25}
          height={{ base: 380, md: 500, lg: 480 }}
        >
          {context.items?.map((item) => (
            <SwiperSlide key={item.id}>
              <VideoCard data={item.snippet} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Skeleton>
    </ContentContainer>
  )
}

export default SermonsSections

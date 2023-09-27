import { Skeleton, useBreakpointValue } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import { SwiperContainer, VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

type HomeContentSermonsProps = {
  context: GetAllVideosFromChannelResponse
}

export const HomeContentSermons = ({ context }: HomeContentSermonsProps) => {
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
    <Skeleton
      isLoaded={!!slidesPerView}
      height={{ base: 'sm', md: 'lg', lg: 'lg' }}
      mx="auto"
      maxWidth="inherit"
      minWidth="full"
    >
      <SwiperContainer slidesPerView={slidesPerView} spaceBetween={25}>
        {context.items?.map((item) => (
          <SwiperSlide key={item.id}>
            <VideoCard videoObjectProperty={item.snippet} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Skeleton>
  )
}

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
    <Skeleton isLoaded={!!slidesPerView} flex={1} mx="auto" width="full">
      <SwiperContainer slidesPerView={slidesPerView} spaceBetween={25}>
        {context.items?.map((item) => (
          <SwiperSlide key={item.id} style={{ display: 'flex', flexGrow: 1 }}>
            <VideoCard videoObjectProperty={item.snippet} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Skeleton>
  )
}

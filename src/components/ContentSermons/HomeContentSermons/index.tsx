import { SwiperSlide } from 'swiper/react'

import { SwiperContainerCards, VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

type HomeContentSermonsProps = {
  context: GetAllVideosFromChannelResponse
}

const slidesPerView = {
  base: 1,
  md: 2,
  lg: 2,
}

export const HomeContentSermons = ({ context }: HomeContentSermonsProps) => {
  return (
    <SwiperContainerCards
      breakPointObject={slidesPerView}
      isLoaded={!!slidesPerView}
    >
      {context.items?.map((item) => (
        <SwiperSlide key={item.id} style={{ display: 'flex', flexGrow: 1 }}>
          <VideoCard videoObjectProperty={item.snippet} />
        </SwiperSlide>
      ))}
    </SwiperContainerCards>
  )
}

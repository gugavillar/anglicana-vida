import { ReactNode } from 'react'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

type SwiperContainerProps = {
  children: ReactNode
  slidesPerView: number | undefined
  spaceBetween: number
  isAutoplay?: boolean
}

export const SwiperContainer = ({
  children,
  slidesPerView,
  spaceBetween,
  isAutoplay,
}: SwiperContainerProps) => {
  return (
    <Swiper
      style={{
        padding: '0px 0px 60px 0px',
        maxWidth: 'calc(90vw - 13vw)',
        minWidth: '100%',
      }}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={[Pagination, Autoplay]}
      pagination={true}
      {...(isAutoplay && {
        autoplay: {
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
      })}
      loop
    >
      {children}
    </Swiper>
  )
}

import { ReactNode } from 'react'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { TWENTY_SECONDS } from '@/constants'

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
        display: 'flex',
        flexGrow: 1,
      }}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={[Pagination, Autoplay]}
      pagination={true}
      {...(isAutoplay && {
        autoplay: {
          delay: TWENTY_SECONDS,
          pauseOnMouseEnter: true,
        },
      })}
      loop
    >
      {children}
    </Swiper>
  )
}

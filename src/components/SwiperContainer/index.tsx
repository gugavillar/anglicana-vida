import { ReactNode } from 'react'

import { Box, FlexProps } from '@chakra-ui/react'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

type SwiperContainerProps = FlexProps & {
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
  ...props
}: SwiperContainerProps) => {
  return (
    <Box
      height="inherit"
      minWidth="full"
      maxWidth="calc(90vw - 13vw)"
      {...props}
    >
      <Swiper
        style={{ height: 'inherit' }}
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
    </Box>
  )
}

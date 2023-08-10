import { ReactNode } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'
import { Navigation } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

type SwiperContainerProps = FlexProps & {
  children: ReactNode
  slidesPerView: number | undefined
  spaceBetween: number
}

export const SwiperContainer = ({
  children,
  slidesPerView,
  spaceBetween,
  ...props
}: SwiperContainerProps) => {
  return (
    <Flex width="calc(100vw - 13vw)" {...props}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        modules={[Navigation]}
        navigation
        loop
      >
        {children}
      </Swiper>
    </Flex>
  )
}

import { ReactNode } from 'react'

import { Flex, FlexProps, useBreakpointValue } from '@chakra-ui/react'
import { Navigation } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

type SwiperContainerProps = FlexProps & {
  children: ReactNode
}

export const SwiperContainer = ({
  children,
  ...props
}: SwiperContainerProps) => {
  const slidesPerView = useBreakpointValue({
    base: 1.2,
    md: 2.5,
    lg: 4.2,
  })
  return (
    <Flex width="calc(100vw - 13vw)" {...props}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={25}
        loop
        modules={[Navigation]}
        navigation
      >
        {children}
      </Swiper>
    </Flex>
  )
}

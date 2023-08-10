import { useBreakpointValue } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import { SwiperContainer } from '@/components/SwiperContainer'

import { PeopleCard } from './PeopleCard'
import { PeopleCardType } from '../about'

type PeopleCardGridContainerProps = {
  items: Array<PeopleCardType>
}

export const PeopleCardGridContainer = ({
  items,
}: PeopleCardGridContainerProps) => {
  const slidesPerView = useBreakpointValue({
    base: 1.2,
    md: 2.5,
    lg: 4.2,
  })

  return (
    <SwiperContainer slidesPerView={slidesPerView} spaceBetween={25}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <PeopleCard item={item} />
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

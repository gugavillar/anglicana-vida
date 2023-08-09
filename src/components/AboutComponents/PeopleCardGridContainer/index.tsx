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
  return (
    <SwiperContainer>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <PeopleCard item={item} />
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

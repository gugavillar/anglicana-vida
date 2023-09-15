import { useBreakpointValue } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import { SwiperContainer } from '@/components/SwiperContainer'

import { Card } from '../common/Card'
import { Information } from '../common/Card/Information'
import { CellCardType } from '../home'

type CellsGridContainerProps = {
  items: Array<CellCardType>
}

export const CellsGridContainer = ({ items }: CellsGridContainerProps) => {
  const slidesPerView = useBreakpointValue({
    base: 1.2,
    md: 2.5,
    lg: 4,
  })
  return (
    <SwiperContainer slidesPerView={slidesPerView} spaceBetween={25}>
      {items.map((card, index) => (
        <SwiperSlide key={index}>
          <Card key={index} card={card} minHeight="30rem">
            <Information
              initialTime={card?.initial_time}
              location={card?.location}
              leader={card?.leader}
              weekDay={card?.week_day}
            />
          </Card>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

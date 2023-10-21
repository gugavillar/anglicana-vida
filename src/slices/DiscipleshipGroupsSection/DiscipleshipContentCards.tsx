import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SwiperSlide } from 'swiper/react'

import { DiscipleshipCard, SwiperContainerCards } from '@/components'

import { useDiscipleship } from './useDiscipleship'

type DiscipleshipContentCardsProps = {
  slice: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice']
}

const breakPointObject = {
  base: 1,
  md: 2,
  lg: 3,
}

export const DiscipleshipContentCards = ({
  slice,
}: DiscipleshipContentCardsProps) => {
  const { discipleship } = useDiscipleship(slice)

  return (
    <SwiperContainerCards
      isLoaded={!!discipleship?.length}
      mt={8}
      flex={1}
      breakPointObject={breakPointObject}
    >
      {discipleship?.map((item) => (
        <SwiperSlide key={item?.id}>
          <DiscipleshipCard discipleshipObjectProperty={item?.data} />
        </SwiperSlide>
      ))}
    </SwiperContainerCards>
  )
}

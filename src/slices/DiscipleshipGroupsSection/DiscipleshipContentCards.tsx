import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SwiperSlide } from 'swiper/react'

import { DiscipleshipCard, SwiperContainerCards } from '@/components'

import { breakPointObject } from '@/constants'

import { useDiscipleship } from './useDiscipleship'

type DiscipleshipContentCardsProps = Pick<
  SliceComponentProps<Content.DiscipleshipGroupsSlice>,
  'slice'
>

export const DiscipleshipContentCards = ({
  slice,
}: DiscipleshipContentCardsProps) => {
  const { discipleship } = useDiscipleship(slice)

  return (
    <SwiperContainerCards
      mt={8}
      isLoaded={!!discipleship?.length}
      breakPointObject={breakPointObject}
    >
      {discipleship?.map((item) => (
        <SwiperSlide key={item?.id} style={{ display: 'flex', flexGrow: 1 }}>
          <DiscipleshipCard discipleshipObjectProperty={item?.data} />
        </SwiperSlide>
      ))}
    </SwiperContainerCards>
  )
}

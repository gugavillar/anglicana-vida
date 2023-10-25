import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SwiperSlide } from 'swiper/react'

import { PeopleCard, SwiperContainerCards } from '@/components'

import { usePastoralTeam } from './usePatoralTeam'

const breakPointObject = {
  base: 1,
  md: 2,
  lg: 3,
}

type PastoralTeamContentCardsProps = {
  slice: SliceComponentProps<Content.PastoralTeamSlice>['slice']
}

export const PastoralTeamContentCards = ({
  slice,
}: PastoralTeamContentCardsProps) => {
  const { people } = usePastoralTeam(slice)

  return (
    <SwiperContainerCards
      breakPointObject={breakPointObject}
      isLoaded={!!people?.length}
    >
      {people?.map((person) => (
        <SwiperSlide key={person?.id} style={{ display: 'flex', flexGrow: 1 }}>
          <PeopleCard data={person?.data} />
        </SwiperSlide>
      ))}
    </SwiperContainerCards>
  )
}

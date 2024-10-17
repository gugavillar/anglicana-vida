import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { ContentContainer, H3 } from '@/components'

import { PastoralTeamContentCards } from './PastoralTeamContentCards'

export type PastoralTeamProps = SliceComponentProps<Content.PastoralTeamSlice>

const PastoralTeam = ({ slice }: PastoralTeamProps): JSX.Element => {
  return (
    <ContentContainer id="team" bg="pampas.50">
      <H3>{slice.primary.heading}</H3>
      <PastoralTeamContentCards slice={slice} />
    </ContentContainer>
  )
}

export default PastoralTeam

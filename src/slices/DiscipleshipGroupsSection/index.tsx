import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { ContentContainer } from '@/components'

import { DiscipleshipContentCards } from './DiscipleshipContentCards'
import { DiscipleshipInfoDescription } from './DiscipleshipInfoDescription'

type DiscipleshipGroupsProps =
  SliceComponentProps<Content.DiscipleshipGroupsSlice>

const DiscipleshipGroups = ({
  slice,
}: DiscipleshipGroupsProps): JSX.Element => {
  return (
    <ContentContainer id="discipleship" bg="pampas.50">
      <DiscipleshipInfoDescription
        title={slice.primary.title}
        description={slice.primary.description}
        image={slice.primary.image}
        phones={slice.primary.phones}
      />
      <DiscipleshipContentCards slice={slice} />
    </ContentContainer>
  )
}

export default DiscipleshipGroups

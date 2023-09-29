import { useRouter } from 'next/router'

import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import {
  ContentContainer,
  H3,
  IfComponent,
  HomeContentSermons,
  SermonsContents,
} from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

type SermonsSectionsProps = SliceComponentProps<
  Content.SermonsSectionsSlice,
  GetAllVideosFromChannelResponse
>

const SermonsSections = ({
  slice,
  context,
}: SermonsSectionsProps): JSX.Element => {
  const { asPath } = useRouter()
  const isHomePage = /^\/$/.test(asPath)

  return (
    <ContentContainer id="sermons">
      <H3>{slice.primary.title}</H3>
      <IfComponent
        condition={isHomePage}
        component={<HomeContentSermons context={context} />}
      />
      <IfComponent
        condition={!isHomePage}
        component={<SermonsContents context={context} />}
      />
    </ContentContainer>
  )
}

export default SermonsSections

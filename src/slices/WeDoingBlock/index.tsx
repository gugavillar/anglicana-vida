import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SliceContainer } from '@/components/SliceContainer'

import { BoxHeader } from './BoxHeader'
import { WeDoCards } from './WeDoCards'

export type WeDoingBlockProps = SliceComponentProps<Content.WeDoingBlockSlice>

const WeDoingBlock = ({ slice }: WeDoingBlockProps): JSX.Element => {
  return (
    <SliceContainer>
      <BoxHeader data={slice?.primary} />
      <WeDoCards data={slice?.items} />
    </SliceContainer>
  )
}

export default WeDoingBlock

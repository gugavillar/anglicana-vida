import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { SliceContainer } from '@/components/SliceContainer'

import { Images } from './Images'

export type SummaryAboutUsProps =
  SliceComponentProps<Content.SummaryAboutUsSlice>

const SummaryAboutUs = ({ slice }: SummaryAboutUsProps): JSX.Element => {
  return (
    <SliceContainer>
      <Images itens={slice?.items} />
    </SliceContainer>
  )
}

export default SummaryAboutUs

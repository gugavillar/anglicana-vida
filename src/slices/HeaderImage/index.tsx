import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import { Flex, Skeleton } from '@chakra-ui/react'

import { BoxWithText } from './BoxWithText'

export type HeaderImageProps = SliceComponentProps<Content.HeaderImageSlice>

const HeaderImage = ({ slice }: HeaderImageProps): JSX.Element => {
  return (
    <Flex as="section" maxH="30rem" align="center" justify="flex-start">
      <BoxWithText primary={slice?.primary} />
      <Skeleton isLoaded={!!slice.primary.background_image?.url}>
        <PrismicNextImage field={slice.primary.background_image} />
      </Skeleton>
    </Flex>
  )
}

export default HeaderImage

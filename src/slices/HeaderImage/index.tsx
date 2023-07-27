import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Flex, Skeleton, Image } from '@chakra-ui/react'

import { BoxWithText } from './BoxWithText'

export type HeaderImageProps = SliceComponentProps<Content.HeaderImageSlice>

const HeaderImage = ({ slice }: HeaderImageProps): JSX.Element => {
  return (
    <Flex
      as="section"
      maxHeight="21rem"
      align="center"
      justify="flex-start"
      overflowY="hidden"
    >
      <BoxWithText primary={slice?.primary} />
      <Skeleton isLoaded={!!slice.primary.background_image?.url}>
        <Image
          objectFit="cover"
          src={slice.primary.background_image?.url as string}
          alt={slice.primary.background_image?.alt as string}
        />
      </Skeleton>
    </Flex>
  )
}

export default HeaderImage

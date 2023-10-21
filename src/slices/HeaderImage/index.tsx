import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Flex, Image } from '@chakra-ui/react'

import { BoxWithText } from './BoxWithText'

export type HeaderImageProps = SliceComponentProps<Content.HeaderImageSlice>

const height = { base: '10rem', md: '16rem', lg: '27rem' }

const HeaderImage = ({ slice }: HeaderImageProps): JSX.Element => {
  return (
    <Flex
      id="headerImagePage"
      as="section"
      align="center"
      justify="flex-start"
      maxHeight={height}
      overflowY="hidden"
      mx="auto"
      position="relative"
    >
      <BoxWithText primary={slice?.primary} />
      <figure>
        <Image
          minHeight={height}
          objectFit="cover"
          src={slice?.primary?.background_image?.url as string}
          alt={slice?.primary?.background_image?.alt as string}
        />
      </figure>
    </Flex>
  )
}

export default HeaderImage

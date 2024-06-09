import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import { Flex } from '@chakra-ui/react'

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
        <PrismicNextImage
          field={slice?.primary?.background_image}
          style={{ minHeight: '100%', objectFit: 'cover' }}
        />
      </figure>
    </Flex>
  )
}

export default HeaderImage

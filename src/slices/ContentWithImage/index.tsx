import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Flex, FlexProps, Image } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { ContentText } from './ContentText'

export type ContentWithImageProps =
  SliceComponentProps<Content.ContentWithImageSlice>

const ContentWithImage = ({ slice }: ContentWithImageProps): JSX.Element => {
  return (
    <SliceContainer>
      {slice?.items?.map((item, index) => {
        const isLastElement = slice?.items?.length === index + 1
        const flexDirection: FlexProps['direction'] =
          index % 2 === 0
            ? { base: 'column', md: 'row', lg: 'row' }
            : { base: 'column', md: 'row-reverse', lg: 'row-reverse' }
        return (
          <Flex
            align="center"
            justify="space-between"
            maxWidth="64rem"
            gap={6}
            key={index}
            flexDirection={{ ...flexDirection }}
            {...(!isLastElement && { mb: 12 })}
            px={4}
          >
            <Image
              maxWidth={{ md: 340, lg: 500 }}
              objectFit="cover"
              src={item?.image?.url as string}
              alt={item?.image?.alt as string}
            />
            <ContentText item={item} />
          </Flex>
        )
      })}
    </SliceContainer>
  )
}

export default ContentWithImage

import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Flex } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { ContentInfo } from './ContentInfo'

export type InfoContentProps = SliceComponentProps<Content.InfoContentSlice>

const InfoContent = ({ slice }: InfoContentProps): JSX.Element => {
  return (
    <SliceContainer>
      <Flex
        align="center"
        justify="center"
        gap={6}
        maxW="47.9375rem"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        px={4}
      >
        {slice?.items?.map((item, index) => (
          <ContentInfo key={index} item={item} />
        ))}
      </Flex>
    </SliceContainer>
  )
}

export default InfoContent

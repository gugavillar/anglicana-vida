import type { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Flex } from '@chakra-ui/react'
import { Broadcast } from 'phosphor-react'

import { HandHeart } from '@/components/Icons/HandHeart'
import { HandsCross } from '@/components/Icons/HandsCross'

const iconSelection = (icon: any) => {
  switch (icon) {
    case 'hands-cross':
      return <HandsCross />
    case 'broadcast':
      return <Broadcast size={24} />
    case 'hand-heart':
      return <HandHeart width={6} height={6} />
  }
}

const iconComponent: JSXMapSerializer = {
  paragraph: ({ text }) => iconSelection(text),
}

type CardIconProps = {
  type: Content.WeDoingBlockSlice['items'][number]['type']
}

export const CardIcon = ({ type }: CardIconProps) => {
  return (
    <Flex borderRadius="full" bg="flesh.200" p={3} maxWidth={12} mb={6}>
      <PrismicRichText components={iconComponent} field={type} />
    </Flex>
  )
}

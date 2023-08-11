import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { CellCardType } from '../../home'

type CellTypeProps = {
  type: CellCardType['type']
}

const typeComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      backgroundClip="text"
      bgGradient="linear(163deg, #A54E2B 0%, #DC9853 100%)"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      textTransform="uppercase"
      mb={4}
    >
      {children}
    </Text>
  ),
}

export const CellType = ({ type }: CellTypeProps) => {
  return <PrismicRichText components={typeComponent} field={type} />
}

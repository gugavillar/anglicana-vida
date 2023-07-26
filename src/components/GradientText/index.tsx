import { Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { GradientTextProps } from './gradientText'

export const GradientText = ({ text }: GradientTextProps) => {
  return (
    <Text
      fontSize="xs"
      backgroundClip="text"
      bgGradient="linear(163deg, #A54E2B 0%, #DC9853 100%)"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      textTransform="uppercase"
    >
      {text}
    </Text>
  )
}

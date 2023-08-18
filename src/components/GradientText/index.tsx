import { Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { GradientTextProps } from './gradientText'

export const GradientText = ({ text, ...props }: GradientTextProps) => {
  return (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      backgroundClip="text"
      bgGradient="linear(163deg, #161722 0%, #5e6999 100%)"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      textTransform="uppercase"
      {...props}
    >
      {text}
    </Text>
  )
}

import { ReactNode } from 'react'

import { Box, CardProps as ChakraCardProps } from '@chakra-ui/react'

import { NameAndDescription } from './NameAndDescription'
import { Type } from './Type'
import { CellCardType, RecurrentCardType } from '../../home'

type CardProps = ChakraCardProps & {
  card: CellCardType | RecurrentCardType
  children: ReactNode
}

export const Card = ({ card, children, ...props }: CardProps) => {
  return (
    <Box
      px={8}
      py={12}
      maxWidth="18.75rem"
      minHeight="22.9375rem"
      bg="serenade.50"
      boxShadow="base"
      borderBottom="1rem solid"
      borderBottomColor="#ffd0a0"
      {...props}
    >
      <Type type={card.type} />
      <NameAndDescription name={card.name} location={card.description} />
      {children}
    </Box>
  )
}

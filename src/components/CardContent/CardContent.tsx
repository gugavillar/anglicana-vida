import { ReactNode } from 'react'

import { Card, CardProps } from '@chakra-ui/react'

type CardContentProps = CardProps & {
  children: ReactNode
}

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return (
    <Card
      borderRadius={0}
      minWidth="16.875rem"
      p={{
        base: 4,
        md: 6,
        lg: '24px 26px 24px 40px',
      }}
      borderBottom="1rem solid transparent"
      _hover={{
        borderBottom: '1rem solid',
        borderColor: '#FFD0A0',
      }}
      {...props}
    >
      {children}
    </Card>
  )
}

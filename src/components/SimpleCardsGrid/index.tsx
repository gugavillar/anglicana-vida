import { ReactNode } from 'react'

import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'

type SimpleCardsGridProps = SimpleGridProps & {
  children: ReactNode
}

export const SimpleCardsGrid = ({
  children,
  ...props
}: SimpleCardsGridProps) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      minWidth="18.75rem"
      rowGap={6}
      columnGap={6}
      {...props}
    >
      {children}
    </SimpleGrid>
  )
}

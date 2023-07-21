import { DrawerHeader as ChakraDrawerHeader } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

type DrawerHeaderProps = {
  title: string
}

export const DrawerHeader = ({ title }: DrawerHeaderProps) => {
  return (
    <ChakraDrawerHeader
      color="whiteAlpha.700"
      fontFamily={roboto?.style?.fontFamily}
    >
      {title}
    </ChakraDrawerHeader>
  )
}

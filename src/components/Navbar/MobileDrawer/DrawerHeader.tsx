import { DrawerHeader as ChakraDrawerHeader } from '@chakra-ui/react'

type DrawerHeaderProps = {
  title: string
}

export const DrawerHeader = ({ title }: DrawerHeaderProps) => {
  return <ChakraDrawerHeader color="white">{title}</ChakraDrawerHeader>
}

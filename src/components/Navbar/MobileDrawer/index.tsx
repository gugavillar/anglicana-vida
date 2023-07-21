import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'

import { DrawerBody } from './DrawerBody'
import { DrawerHeader } from './DrawerHeader'
import { ItemMenu } from '../navbar'

type MobileDrawerProps = {
  isOpen: boolean
  onClose: () => void
  menuItens: Array<ItemMenu>
}

export const MobileDrawer = ({
  isOpen,
  onClose,
  menuItens,
}: MobileDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="gray.700">
        <DrawerCloseButton size="lg" top={3} color="whiteAlpha.700" />
        <DrawerHeader title="Menu principal" />
        <DrawerBody menuItens={menuItens} />
      </DrawerContent>
    </Drawer>
  )
}

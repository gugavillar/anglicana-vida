import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'

import { DrawerBody } from './DrawerBody'
import { DrawerHeader } from './DrawerHeader'
import { NavbarProps } from '../navbar'

type MobileDrawerProps = {
  isOpen: boolean
  onClose: () => void
  menuItens: NavbarProps['menuItens']
}

export const MobileDrawer = ({
  isOpen,
  onClose,
  menuItens,
}: MobileDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="cinder.950">
        <DrawerCloseButton size="lg" top={3} color="white" />
        <DrawerHeader title="Menu principal" />
        <DrawerBody onClose={onClose} menuItens={menuItens} />
      </DrawerContent>
    </Drawer>
  )
}

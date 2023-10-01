import { Fragment } from 'react'

import { useDisclosure, IconButton } from '@chakra-ui/react'

import { List } from 'phosphor-react'

import { MobileDrawer } from './MobileDrawer'
import { NavbarProps } from './navbar'

type MobileProps = {
  menuItens: NavbarProps['menuItens']
}

export const Mobile = ({ menuItens }: MobileProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Fragment>
      <IconButton
        aria-label="Menu principal"
        onClick={onOpen}
        icon={<List width={40} height={40} weight="bold" />}
        bg="transparent"
        color="whiteAlpha.700"
        width="max-content"
      />
      <MobileDrawer isOpen={isOpen} onClose={onClose} menuItens={menuItens} />
    </Fragment>
  )
}

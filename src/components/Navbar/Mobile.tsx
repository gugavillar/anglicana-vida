import { Fragment } from 'react'

import { useDisclosure, Button } from '@chakra-ui/react'

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
      <Button
        onClick={onOpen}
        leftIcon={<List width={40} height={40} weight="bold" />}
        bg="transparent"
        color="whiteAlpha.700"
        p={0}
      />
      <MobileDrawer isOpen={isOpen} onClose={onClose} menuItens={menuItens} />
    </Fragment>
  )
}

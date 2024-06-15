import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

import { Heart } from 'phosphor-react'

type DonationButtonProps = ButtonProps

export const DonationButton = ({ ...props }: DonationButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<Heart width={24} height={24} weight="fill" />}
        px={6}
        bg="flesh.400"
        color="pampas.50"
        _hover={{
          bg: 'flesh.500',
          transition: 'background-color 0.3s',
        }}
        borderRadius={32}
        {...props}
      >
        Faça sua doação
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Faça sua doação agora!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>teste</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

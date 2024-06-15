import { useState } from 'react'

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
  Text,
  Stack,
  Input,
  Flex,
  InputGroup,
  InputLeftAddon,
  useToast,
  VStack,
} from '@chakra-ui/react'

import { Copy, Heart } from 'phosphor-react'
import { PixBR } from 'pixbrasil'
import { NumberFormatBase } from 'react-number-format'
import QRCode from 'react-qr-code'

import { PIX } from '@/constants'
import { currencyFieldValue, removeCurrencyFormat } from '@/formatters'

type DonationButtonProps = ButtonProps

export const DonationButton = ({ ...props }: DonationButtonProps) => {
  const [value, setValue] = useState('')
  const [pixValue, setPixValue] = useState<string | null>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const format = (value: string) => currencyFieldValue(value)

  const handleClick = async () => {
    const pixValue = removeCurrencyFormat(value)

    if (Number(pixValue) < 0.01) return

    const pixPayload = PixBR({ ...PIX, amount: Number(pixValue) })
    setPixValue(pixPayload)
  }

  const handleClose = () => {
    setValue('')
    setPixValue(null)
    onClose()
  }

  const handleCopyPixValue = () => {
    if (!pixValue) return
    navigator.clipboard.writeText(pixValue)
    toast({
      status: 'success',
      description: 'Pix copiado com sucesso!',
    })
  }

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

      <Modal isOpen={isOpen} onClose={handleClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Faça sua doação agora via pix!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4}>
              <Text>
                Primeiro, digite o valor da sua doação, depois clique em gerar:
              </Text>
              <Flex gap={6} justify="space-between" align="center">
                <InputGroup>
                  <InputLeftAddon>R$</InputLeftAddon>
                  <NumberFormatBase
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    format={format}
                    disabled={!!pixValue}
                    borderTopLeftRadius={0}
                    borderBottomLeftRadius={0}
                    customInput={Input}
                  />
                </InputGroup>

                <Button
                  type="button"
                  width={64}
                  onClick={handleClick}
                  isDisabled={!!pixValue}
                >
                  Gerar
                </Button>
              </Flex>
              {pixValue && (
                <Stack spacing={8} align="center">
                  <VStack>
                    <Text>Doe pelo código Pix (Pix copia e cola)</Text>
                    <Button
                      onClick={handleCopyPixValue}
                      leftIcon={<Copy width={24} height={24} />}
                    >
                      Copiar código
                    </Button>
                    <Text>{process.env.NEXT_PUBLIC_PIX_API}</Text>
                  </VStack>
                  <VStack>
                    <Text>Ou aponte a câmera do celular para o QR Code</Text>
                    <QRCode value={pixValue} size={164} />
                  </VStack>
                </Stack>
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

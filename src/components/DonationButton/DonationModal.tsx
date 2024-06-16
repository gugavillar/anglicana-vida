import { useState } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  VStack,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'

import { Copy } from 'phosphor-react'
import PixBR from 'pixbrasil'
import { NumberFormatBase } from 'react-number-format'
import QRCode from 'react-qr-code'

import { PIX } from '@/constants'
import { currencyFieldValue, pixKeys, removeCurrencyFormat } from '@/formatters'

type DonationModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [value, setValue] = useState('')
  const [pixValue, setPixValue] = useState<string | null>(null)

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
            <SimpleGrid columns={2} spacing={6}>
              <InputGroup>
                <InputLeftAddon>R$</InputLeftAddon>
                <NumberFormatBase
                  onChange={(event) => setValue(event.target.value)}
                  value={value}
                  type="tel"
                  format={format}
                  disabled={!!pixValue}
                  borderTopLeftRadius={0}
                  borderBottomLeftRadius={0}
                  customInput={Input}
                />
              </InputGroup>

              <Button
                type="button"
                onClick={handleClick}
                isDisabled={!!pixValue}
                bg="flesh.400"
                color="pampas.50"
                _hover={{
                  bg: 'flesh.500',
                  transition: 'background-color 0.3s',
                }}
                borderRadius={32}
              >
                Gerar PIX
              </Button>
            </SimpleGrid>
            {pixValue && (
              <Stack spacing={8} align="center">
                <VStack>
                  <Text>Doe pelo código Pix (Pix copia e cola)</Text>
                  <Button
                    onClick={handleCopyPixValue}
                    leftIcon={<Copy width={24} height={24} />}
                    bg="flesh.400"
                    color="pampas.50"
                    px={8}
                    _hover={{
                      bg: 'flesh.500',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    Copiar código
                  </Button>
                  <Text>
                    chave pix:&nbsp;
                    <Text as="span" fontWeight="bold">
                      {pixKeys(process.env.NEXT_PUBLIC_PIX_API)}
                    </Text>
                  </Text>
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
  )
}

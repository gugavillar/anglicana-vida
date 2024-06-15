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
} from '@chakra-ui/react'

import { Heart } from 'phosphor-react'
import { NumberFormatBase } from 'react-number-format'

import { currencyFieldValue, removeCurrencyFormat } from '@/formatters'
import { getPix } from '@/helpers/getPix'

type DonationButtonProps = ButtonProps

export const DonationButton = ({ ...props }: DonationButtonProps) => {
  const [value, setValue] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const format = (value: string) => currencyFieldValue(value)

  const handleClick = async () => {
    const pixValue = removeCurrencyFormat(value)

    if (Number(pixValue) < 0.01) return
    const response = await getPix(pixValue)
    console.log(response)
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

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
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
                    borderTopLeftRadius={0}
                    borderBottomLeftRadius={0}
                    customInput={Input}
                  />
                </InputGroup>

                <Button type="button" width={64} onClick={handleClick}>
                  Gerar
                </Button>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

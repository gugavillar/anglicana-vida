import Link from 'next/link'
import { memo } from 'react'

import { KeyTextField } from '@prismicio/client'

import { Button } from '@chakra-ui/react'

import { WhatsappLogo } from 'phosphor-react'

type WhatsappButtonProps = {
  message: KeyTextField | undefined
  number: KeyTextField | undefined
}

export const WhatsappButton = memo(
  ({ message, number }: WhatsappButtonProps) => {
    if (!message || !number) return null

    const encodedMessage = encodeURI(message)

    return (
      <Link
        href={`https://wa.me/55${number}/?text=${encodedMessage}`}
        target="_blank"
      >
        <Button
          position="fixed"
          borderRadius="full"
          bottom={6}
          right={6}
          zIndex={9999}
          width="fit-content"
          height="fit-content"
          p={2}
          iconSpacing={0}
          bg="whatsapp.500"
          _hover={{
            bg: 'whatsapp.700',
            transition: 'background-color 300ms linear',
          }}
          leftIcon={<WhatsappLogo size="32" />}
        />
      </Link>
    )
  },
)

WhatsappButton.displayName = 'WhatsappButton'

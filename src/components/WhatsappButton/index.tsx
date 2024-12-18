import Link from 'next/link'
import { memo } from 'react'

import type * as prismic from '@prismicio/client'

import { Button, Tooltip } from '@chakra-ui/react'

import { WhatsappLogo } from 'phosphor-react'

type WhatsappButtonProps = {
  message: prismic.KeyTextField | undefined
  number: prismic.KeyTextField | undefined
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
        <Tooltip
          label="Precisa de ajuda?"
          placement="left"
          borderRadius="xl"
          py={1.5}
          bg="gray.700"
          hasArrow
          fontWeight="semibold"
        >
          <Button
            title="Precisa de ajuda? Fale conosco pelo whatsapp!"
            position="fixed"
            borderRadius="full"
            bottom={6}
            right={6}
            zIndex={2}
            width="fit-content"
            height="fit-content"
            color="white"
            p={2}
            iconSpacing={0}
            bg="whatsapp.600"
            _hover={{
              bg: 'whatsapp.700',
              transition: 'background-color 300ms linear',
            }}
            leftIcon={<WhatsappLogo size="32" />}
          />
        </Tooltip>
      </Link>
    )
  },
)

WhatsappButton.displayName = 'WhatsappButton'

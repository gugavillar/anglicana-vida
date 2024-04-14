import { memo } from 'react'

import { Button } from '@chakra-ui/react'

import { WhatsappLogo } from 'phosphor-react'

export const WhatsappButton = memo(() => {
  return (
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
  )
})

WhatsappButton.displayName = 'WhatsappButton'

import Link from 'next/link'
import { memo } from 'react'

import { Button } from '@chakra-ui/react'

import { WhatsappLogo } from 'phosphor-react'

export const WhatsappButton = memo(() => {
  const message = encodeURI(
    'Olá, estou interessado em participar das atividades da igreja. Como posso me envolver?',
  )

  return (
    <Link href={`https://wa.me/5581995208327/?text=${message}`} target="_blank">
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
})

WhatsappButton.displayName = 'WhatsappButton'

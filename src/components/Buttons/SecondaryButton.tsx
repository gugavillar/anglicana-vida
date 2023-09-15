import { PrismicNextLink } from '@prismicio/next'

import { Button } from '@chakra-ui/react'

import { isPassedDate } from '@/formatters'

import { SecondaryButtonProps } from './buttons'
import { IfComponent } from '../IfComponent'

export const SecondaryButton = ({
  textButton,
  inscriptionLink,
  initialInscriptionDate,
  ...props
}: SecondaryButtonProps) => {
  const isInscriptionOpen = isPassedDate(initialInscriptionDate)
  return (
    <IfComponent
      condition={!isInscriptionOpen}
      component={
        <PrismicNextLink field={inscriptionLink} target="_blank">
          <Button
            minH={16}
            px={16}
            py={6}
            borderRadius={12}
            fontSize="md"
            color="white"
            textTransform="uppercase"
            bg="cinder.700"
            _hover={{
              bg: 'cinder.700',
              opacity: 0.9,
            }}
            {...props}
          >
            {textButton}
          </Button>
        </PrismicNextLink>
      }
    />
  )
}

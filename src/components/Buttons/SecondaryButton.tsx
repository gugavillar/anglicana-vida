import { PrismicNextLink } from '@prismicio/next'

import { Button } from '@chakra-ui/react'
import { isPast, parseISO } from 'date-fns'

import { SecondaryButtonProps } from './buttons'
import { IfComponent } from '../IfComponent'

export const SecondaryButton = ({
  textButton,
  inscriptionLink,
  initialInscriptionDate,
  ...props
}: SecondaryButtonProps) => {
  const initialDate = parseISO(initialInscriptionDate)
  const isInscriptionOpen = isPast(initialDate)
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
            color="flesh.200"
            textTransform="uppercase"
            bg="cinder.950"
            _hover={{
              bg: 'cinder.950',
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

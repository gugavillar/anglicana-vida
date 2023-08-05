import { LinkField } from '@prismicio/client'

import { ButtonProps } from '@chakra-ui/react'

export type SecondaryButtonProps = ButtonProps & {
  textButton: string
  inscriptionLink: LinkField
  initialInscriptionDate: TimestampField
}

export type NavigationButtonProps = ButtonProps & {
  pathRouter: string
  textButton: string
  pathsToShow: Array<string>
}

import { ButtonProps } from '@chakra-ui/react'

export type SecondaryButtonProps = ButtonProps & {
  textButton: string
}

export type NavigationButtonProps = ButtonProps & {
  pathRouter: string
  textButton: string
  pathsToShow: Array<string>
}

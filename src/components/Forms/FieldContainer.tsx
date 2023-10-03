import { ReactNode } from 'react'

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react'

import { IfComponent } from '@/components'

type FieldContainerProps = FormControlProps & {
  children: ReactNode
  errorText?: string
  helperText?: string
}

export const FieldContainer = ({
  children,
  label,
  isInvalid,
  errorText,
  helperText,
  ...props
}: FieldContainerProps) => {
  return (
    <FormControl {...props}>
      <FormLabel>{label}</FormLabel>
      {children}
      <IfComponent
        condition={!!helperText}
        component={<FormHelperText>{helperText}</FormHelperText>}
      />
      <IfComponent
        condition={!!isInvalid}
        component={<FormErrorMessage>{errorText}</FormErrorMessage>}
      />
    </FormControl>
  )
}

import { forwardRef } from 'react'

import { InputProps, Input } from '@chakra-ui/react'

import { PatternFormat, PatternFormatProps } from 'react-number-format'

type MaskedInputProps = PatternFormatProps & InputProps

export const MaskedInputField = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ format, ...props }, ref) => {
    return (
      <Input as={PatternFormat} format={format} getInputRef={ref} {...props} />
    )
  },
)

MaskedInputField.displayName = 'MaskedInputField'

import { forwardRef } from 'react'

import { InputProps, Input } from '@chakra-ui/react'

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => <Input {...props} ref={ref} />,
)

InputField.displayName = 'InputField'

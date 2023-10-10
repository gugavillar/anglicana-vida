import { forwardRef } from 'react'

import { Textarea, TextareaProps } from '@chakra-ui/react'

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => <Textarea ref={ref} {...props} />,
)

TextareaField.displayName = 'TextareaField'

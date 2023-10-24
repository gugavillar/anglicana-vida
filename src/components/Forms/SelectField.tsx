import { forwardRef } from 'react'

import { SelectProps, Select } from '@chakra-ui/react'

import { SelectOption } from '@/types/common'

import { IfComponent } from '../IfComponent'

type SelectFieldProps = SelectProps & {
  options: SelectOption
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ options, placeholder, ...props }, ref) => (
    <Select {...props} ref={ref}>
      <IfComponent
        condition={!!placeholder}
        component={<option value="">{placeholder}</option>}
      />
      {options?.map((option) => (
        <option key={option?.value} value={option?.value}>
          {option?.label}
        </option>
      ))}
    </Select>
  ),
)

SelectField.displayName = 'SelectField'

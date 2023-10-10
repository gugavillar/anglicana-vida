import { FormProvider, useForm } from 'react-hook-form'

import { PersonDataFields } from '@/components'

import { SelectOption } from '@/types/common'

type SubscriptionFormProps = {
  states: SelectOption
}

export const SubscriptionForm = ({ states }: SubscriptionFormProps) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <PersonDataFields states={states} />
    </FormProvider>
  )
}

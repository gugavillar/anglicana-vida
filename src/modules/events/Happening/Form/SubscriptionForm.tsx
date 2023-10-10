import { FormProvider, useForm } from 'react-hook-form'

import { PersonDataFields } from '@/components'

type SubscriptionFormProps = {
  states: Array<{ label: string; value: string }>
}

export const SubscriptionForm = ({ states }: SubscriptionFormProps) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <PersonDataFields states={states} />
    </FormProvider>
  )
}

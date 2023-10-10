import { useMemo } from 'react'

import { useSteps } from '@chakra-ui/react'

import { FormProvider, useForm } from 'react-hook-form'

import { GuestDataFields, PersonDataFields, StepComponent } from '@/components'

import { SelectOption } from '@/types/common'

type SubscriptionFormProps = {
  states: SelectOption
}

export const SubscriptionForm = ({ states }: SubscriptionFormProps) => {
  const methods = useForm()

  const steps = useMemo(
    () => [
      {
        children: <PersonDataFields states={states} />,
      },
      {
        children: <GuestDataFields />,
      },
    ],
    [states],
  )

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  })

  return (
    <FormProvider {...methods}>
      <StepComponent
        activeStep={activeStep}
        steps={steps}
        nextStep={goToNext}
        prevStep={goToPrevious}
      />
    </FormProvider>
  )
}

import { useMemo } from 'react'

import { Button, useSteps } from '@chakra-ui/react'

import { FormProvider, useForm } from 'react-hook-form'

import {
  GuestDataFields,
  PersonDataFields,
  StepActions,
  StepComponent,
  StepContent,
} from '@/components'

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
    count: steps.length - 1,
  })

  return (
    <FormProvider {...methods}>
      <StepComponent activeStep={activeStep} steps={steps}>
        <StepContent>{steps?.[activeStep]?.children}</StepContent>
        <StepActions>
          <Button
            isDisabled={activeStep === 0}
            onClick={goToPrevious}
            width="16rem"
          >
            Voltar
          </Button>
          <Button onClick={goToNext} width="16rem">
            Avançar
          </Button>
        </StepActions>
      </StepComponent>
    </FormProvider>
  )
}

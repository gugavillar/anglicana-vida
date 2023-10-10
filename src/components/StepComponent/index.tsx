import { ReactNode } from 'react'

import {
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepSeparator,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'

type StepProps = {
  steps: Array<{
    children: ReactNode
  }>
  activeStep: number
  nextStep: () => void
  prevStep: () => void
}

export const StepComponent = ({
  activeStep,
  steps,
  nextStep,
  prevStep,
}: StepProps) => {
  return (
    <Box width="full">
      <Stepper index={activeStep} width="full" colorScheme="gray">
        {steps.map((_, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box width="full" mt={6}>
        {steps?.[activeStep]?.children}
      </Box>
      <ButtonGroup mt={6} gap={8} justifyContent="end" width="full">
        <Button isDisabled={activeStep === 0} onClick={prevStep} width="16rem">
          Voltar
        </Button>
        <Button onClick={nextStep} width="16rem">
          Avançar
        </Button>
      </ButtonGroup>
    </Box>
  )
}

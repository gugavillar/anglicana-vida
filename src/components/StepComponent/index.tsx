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
} from '@chakra-ui/react'

type StepProps = {
  steps: Array<{
    children: ReactNode
  }>
  activeStep: number
  children: ReactNode
}

type StepContentProps = {
  children: ReactNode
}

export const StepContent = ({ children }: StepContentProps) => {
  return (
    <Box width="full" mt={6}>
      {children}
    </Box>
  )
}

type StepActionsProps = {
  children: ReactNode
}

export const StepActions = ({ children }: StepActionsProps) => {
  return (
    <ButtonGroup mt={6} gap={8} justifyContent="end" width="full">
      {children}
    </ButtonGroup>
  )
}

export const StepComponent = ({ activeStep, steps, children }: StepProps) => {
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
      {children}
    </Box>
  )
}

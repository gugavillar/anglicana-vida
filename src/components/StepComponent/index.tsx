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
} from '@chakra-ui/react'

type StepProps = {
  steps: Array<{
    children: ReactNode
  }>
  activeStep: number
}

export const StepComponent = ({ activeStep, steps }: StepProps) => {
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
    </Box>
  )
}

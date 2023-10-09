import { ReactNode } from 'react'

import { AbsoluteCenter, Box, Divider, Flex } from '@chakra-ui/react'

import { CheckCircle } from 'phosphor-react'

import { IfComponent } from '@/components'

type StepProps = {
  steps: Array<{
    children: ReactNode
    isComplete: boolean
  }>
  activeStep: number
}

const stepPropsCommon = {
  px: 3,
  py: 1,
  border: '1px solid',
  borderRadius: 'full',
}

const stepComponent = (
  isLastStep: boolean,
  isFirstStep: boolean,
  stepNumber: number,
  isComplete: boolean,
) => (
  <Box
    key={stepNumber}
    position="relative"
    py={4}
    {...(!isLastStep && { width: 'inherit' })}
  >
    <IfComponent
      condition={!isFirstStep && !isLastStep}
      component={<Divider borderColor="gray.700" />}
    />
    <AbsoluteCenter
      left="0%"
      bg="white"
      {...(!isComplete && { ...stepPropsCommon })}
    >
      {isComplete ? (
        <CheckCircle size="2.5rem" weight="thin" />
      ) : (
        stepNumber + 1
      )}
    </AbsoluteCenter>
    <IfComponent
      condition={isFirstStep}
      component={<Divider borderColor="gray.700" ml={4} />}
    />
  </Box>
)

export const Step = ({ activeStep, steps }: StepProps) => {
  return (
    <Box width="full">
      <Flex width="full" px={4}>
        {steps.map(({ isComplete }, index) => {
          const isFirstStep = index === 0
          const isLastStep = index === steps.length - 1
          return stepComponent(isLastStep, isFirstStep, index, isComplete)
        })}
      </Flex>
      <Box mt={6}>{steps[activeStep]?.children}</Box>
    </Box>
  )
}

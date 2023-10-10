import { useSteps, Text } from '@chakra-ui/react'

import { StepComponent } from '@/components'

const steps = [
  { children: <Text>Step 1</Text> },
  { children: <Text>Step 2</Text> },
  { children: <Text>Step 3</Text> },
]

export const ContainerStep = () => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  })
  return <StepComponent activeStep={activeStep} steps={steps} />
}

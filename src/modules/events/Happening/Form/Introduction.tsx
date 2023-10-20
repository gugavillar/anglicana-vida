import { Button } from '@chakra-ui/react'

import { VolunteerInformation } from '../Steps/VolunteerInformation'

type IntroductionProps = {
  setIsFormStarted: {
    on: () => void
  }
  eventText: string
  year: string
}

export const Introduction = ({
  eventText,
  setIsFormStarted,
  year,
}: IntroductionProps) => {
  return (
    <>
      <VolunteerInformation eventText={eventText} year={year} />
      <Button
        onClick={setIsFormStarted.on}
        alignSelf="center"
        mt={6}
        width={{ base: 'full', md: '26rem', lg: '26rem' }}
      >
        Iniciar
      </Button>
    </>
  )
}

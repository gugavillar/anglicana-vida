import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Heading, Text } from '@chakra-ui/react'

import { ContentContainer } from '@/components'

type ContainerFormProps = {
  children: ReactNode
}

export const ContainerForm = ({ children }: ContainerFormProps) => {
  const { asPath } = useRouter()
  const participantOrVolunteer = asPath.includes('participante')
    ? 'participante'
    : 'voluntário'

  return (
    <ContentContainer>
      <Heading
        as="h3"
        variant="subTitle"
        alignSelf="center"
        textAlign="center"
        mb={8}
      >
        Formulário para{' '}
        <Text as="span" textTransform="capitalize">
          {participantOrVolunteer}
        </Text>
      </Heading>
      {children}
    </ContentContainer>
  )
}

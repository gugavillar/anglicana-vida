import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Heading, Text } from '@chakra-ui/react'

import { ContentContainer, IfComponent } from '@/components'

type ContainerFormProps = {
  children: ReactNode
  hasTitle?: boolean
}

export const ContainerForm = ({ children, hasTitle }: ContainerFormProps) => {
  const { asPath } = useRouter()
  const participantOrVolunteer = asPath.includes('participante')
    ? 'participante'
    : 'voluntário'

  return (
    <ContentContainer>
      <IfComponent
        condition={!!hasTitle}
        component={
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
        }
      />
      {children}
    </ContentContainer>
  )
}

import { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'

import { ContentContainer } from '@/components'

type SubscriptionPageProps = {
  titleOfPage: string
  children: ReactNode
}

export const SubscriptionPageContainer = ({
  titleOfPage,
  children,
}: SubscriptionPageProps) => {
  return (
    <ContentContainer>
      <Heading
        as="h3"
        variant="subTitle"
        alignSelf="center"
        textAlign="center"
        mb={8}
      >
        {titleOfPage}
      </Heading>
      <Flex align="center" wrap="wrap" gap={12} width="full" justify="center">
        {children}
      </Flex>
    </ContentContainer>
  )
}

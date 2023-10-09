import { GetServerSidePropsContext } from 'next'

import { Heading, Text } from '@chakra-ui/react'

import * as yup from 'yup'

import { Step } from '@/components'

import { ContainerForm } from '@/modules/events/Forms/ContainerForm'
import { Information } from '@/modules/events/Happening'

const redirectPageObject = {
  redirect: {
    destination: '/eventos',
    permanent: false,
  },
}

const querySchema = yup.object({
  isOpenSubscription: yup.boolean().required(),
  year: yup.string().required(),
  eventText: yup.string().required(),
})

export default function Page() {
  return (
    <ContainerForm>
      <Step
        steps={[
          { children: <Information />, isComplete: false },
          { children: <Text>step 2</Text>, isComplete: false },
          { children: <Text>step 3</Text>, isComplete: false },
        ]}
        activeStep={0}
      />
    </ContainerForm>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  try {
    const parsedQuery = querySchema.cast(query)

    if (!parsedQuery.isOpenSubscription) return redirectPageObject

    return {
      props: {},
    }
  } catch {
    return redirectPageObject
  }
}

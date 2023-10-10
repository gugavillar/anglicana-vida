import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next'

import { useBoolean } from '@chakra-ui/react'

import * as yup from 'yup'

import { ContainerForm } from '@/modules/events/Forms/ContainerForm'
import { HappeningForm } from '@/modules/events/Happening/Form'
import { getBrazilianStatesToSelectField } from '@/services'

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
  name: yup.string().oneOf(['happening']).required(),
})

export default function Page({
  eventText,
  year,
  name,
  states,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const [isFormStarted, setIsFormStarted] = useBoolean()

  const EventFormToMount = {
    happening: (
      <HappeningForm
        eventText={eventText}
        isFormStarted={isFormStarted}
        setIsFormStarted={setIsFormStarted}
        year={year}
        states={states}
      />
    ),
  }

  return (
    <ContainerForm hasTitle={isFormStarted}>
      {EventFormToMount?.[name]}
    </ContainerForm>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  try {
    const parsedQuery = querySchema.cast(query)

    if (!parsedQuery.isOpenSubscription) return redirectPageObject

    const states = await getBrazilianStatesToSelectField()

    return {
      props: {
        eventText: parsedQuery.eventText,
        year: parsedQuery.year,
        name: parsedQuery.name,
        states,
      },
    }
  } catch {
    return redirectPageObject
  }
}

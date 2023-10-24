import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next'

import { useBoolean } from '@chakra-ui/react'

import { useQuery } from 'react-query'
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
  statesProps,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const [isFormStarted, setIsFormStarted] = useBoolean()
  const { data: states } = useQuery('states', getBrazilianStatesToSelectField, {
    initialData: statesProps,
    staleTime: Infinity,
    cacheTime: Infinity,
  })

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

    const statesProps = await getBrazilianStatesToSelectField()

    return {
      props: {
        eventText: parsedQuery.eventText,
        year: parsedQuery.year,
        name: parsedQuery.name,
        statesProps,
      },
    }
  } catch {
    return redirectPageObject
  }
}

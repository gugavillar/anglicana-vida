import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next'

import * as yup from 'yup'

import { SubscriptionPage } from '@/modules'

const redirectPageObject = {
  redirect: {
    destination: '/eventos',
    permanent: false,
  },
}

const querySchema = yup.object({
  isOpenSubscription: yup.boolean().required(),
  titleOfPage: yup.string().required(),
  badgeTextParticipants: yup.string().required(),
  badgeTextVolunteers: yup.string().required(),
})

export default function Page({
  titleOfPage,
  badgeTextParticipants,
  badgeTextVolunteers,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <SubscriptionPage
      titleOfPage={titleOfPage}
      badgeTextParticipants={badgeTextParticipants}
      badgeTextVolunteers={badgeTextVolunteers}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  try {
    const parsedQuery = querySchema.cast(query)

    if (!parsedQuery.isOpenSubscription) return redirectPageObject

    return {
      props: {
        titleOfPage: parsedQuery.titleOfPage,
        badgeTextParticipants: parsedQuery.badgeTextParticipants,
        badgeTextVolunteers: parsedQuery.badgeTextVolunteers,
      },
    }
  } catch {
    return redirectPageObject
  }
}

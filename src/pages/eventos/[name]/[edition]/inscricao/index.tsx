import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next'

import * as yup from 'yup'

import { SubscriptionPageContainer } from '@/modules'
import { HappeningCards } from '@/modules/events/Happening'

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
  eventText: yup.string().required(),
  formattedYear: yup.string().required(),
})

export default function Page({
  titleOfPage,
  ...rest
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <SubscriptionPageContainer titleOfPage={titleOfPage}>
      <HappeningCards data={{ ...rest }} />
    </SubscriptionPageContainer>
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
        eventText: parsedQuery.eventText,
        year: parsedQuery.formattedYear,
      },
    }
  } catch {
    return redirectPageObject
  }
}

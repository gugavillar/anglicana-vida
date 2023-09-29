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
})

export default function Page({
  titleOfPage,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return <SubscriptionPage titleOfPage={titleOfPage} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  try {
    const parsedQuery = querySchema.cast(query)

    if (!parsedQuery.isOpenSubscription) return redirectPageObject

    return {
      props: {
        titleOfPage: parsedQuery.titleOfPage,
      },
    }
  } catch {
    return redirectPageObject
  }
}

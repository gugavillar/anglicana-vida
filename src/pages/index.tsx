import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { isFilled } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'

import { getHome } from '@/helpers'
import { components } from '@/slices'

export default function HomePage({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const page = await getHome({ previewData })

  return {
    props: { page },
    revalidate: 60,
  }
}

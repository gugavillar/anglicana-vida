import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { isFilled } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'

import { getHome } from '@/helpers'
import { getAllVideosFromChannel } from '@/services'
import { components } from '@/slices'

export default function HomePage({
  page,
  videos,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={videos}
      />
    </>
  )
}

export async function getServerSideProps() {
  const [page, videos] = await Promise.all([
    getHome(),
    getAllVideosFromChannel(
      process.env.YOUTUBE_API_KEY as string,
      process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID as string,
      12,
    ),
  ])
  return {
    props: { page, videos },
  }
}

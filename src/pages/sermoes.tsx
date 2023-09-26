import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { isFilled } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'

import { getSermons } from '@/helpers'
import { getAllVideosFromChannel } from '@/services'
import { components } from '@/slices'

export default function Page({
  page,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export async function getStaticProps() {
  const [page, videos] = await Promise.all([
    getSermons(),
    getAllVideosFromChannel(
      process.env.YOUTUBE_API_KEY,
      process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID,
      6,
    ),
  ])
  return {
    props: { page, videos },
    revalidate: 60,
  }
}

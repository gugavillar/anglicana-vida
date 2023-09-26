import { NextApiRequest, NextApiResponse } from 'next'

type BodyType = {
  data: {
    playlistId: string
    pageToken: string
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { data }: BodyType = req.body

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_YOUTUBE_URL}/playlistItems?key=${process.env.YOUTUBE_API_KEY}&part=snippet&part=contentDetails&playlistId=${data.playlistId}&maxResults=6&pageToken=${data.pageToken}`,
    )

    const json = await response.json()

    res.status(200).json(json)
  } catch {
    res.status(400).json('Ocorreu um error tente novamente.')
  }
}

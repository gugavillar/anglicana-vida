import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const youtubeURL = `${process.env.NEXT_PUBLIC_YOUTUBE_URL}/search?key=${process.env.YOUTUBE_API_KEY}&part=snippet&eventType=live&type=video&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}`
  try {
    const response = await fetch(youtubeURL)

    const json = await response.json()

    res.status(200).json(json)
  } catch {
    res.status(400).json('Ocorreu um error tente novamente.')
  }
}

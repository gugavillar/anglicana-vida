import { NextApiRequest, NextApiResponse } from 'next'

import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'

import { createClient } from '../../prismicio'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({ req })

  setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client })
}

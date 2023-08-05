import { LiveSermonContainer } from '@/components/SermonsComponents/LiveSermonContainer'

import { LiveSermonDocument } from '../../../../prismicio-types'

type LiveSermonProps = {
  liveSermon: LiveSermonDocument<string>[]
}

export const LiveSermon = ({ liveSermon }: LiveSermonProps) => {
  if (!liveSermon?.length) return null

  return <LiveSermonContainer data={liveSermon?.[0]?.data} />
}

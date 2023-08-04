import dynamic from 'next/dynamic'

import { LiveSermonDocument } from '../../../../prismicio-types'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type VideoProps = {
  video: LiveSermonDocument['data']['live_youtube']
}

export const Video = ({ video }: VideoProps) => {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      style={{
        height: 'auto',
        aspectRatio: 16 / 9,
      }}
      url={video.embed_url}
    />
  )
}

import { Flex } from '@chakra-ui/react'

import { TextVideoBox } from './TextVideoBox'
import { Video } from './Video'
import { LiveSermonDocument } from '../../../../prismicio-types'

type LiveSermonContainerProps = {
  data: LiveSermonDocument['data']
}

export const LiveSermonContainer = ({ data }: LiveSermonContainerProps) => {
  return (
    <Flex
      align="flex-start"
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      gap={8}
      width="full"
      mb={12}
      px={6}
    >
      <Video video={data?.live_youtube} />
      <TextVideoBox data={data} />
    </Flex>
  )
}

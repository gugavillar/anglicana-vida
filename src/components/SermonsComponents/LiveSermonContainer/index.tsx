import { Card, Box, CardBody } from '@chakra-ui/react'

import { TextVideoBox } from './TextVideoBox'
import { Video } from './Video'
import { LiveSermonDocument } from '../../../../prismicio-types'

type LiveSermonContainerProps = {
  data: LiveSermonDocument['data']
}

export const LiveSermonContainer = ({ data }: LiveSermonContainerProps) => {
  return (
    <Box px={6}>
      <Card
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        bg="white"
        boxShadow="none"
        borderRadius={0}
        p={{
          base: 4,
          md: 6,
          lg: 6,
        }}
        borderBottom="1rem solid #FFD0A0"
        mb={12}
      >
        <Box minWidth={{ base: 'full', md: '50%', lg: '60%' }}>
          <Video video={data?.live_youtube} />
        </Box>
        <CardBody p={0}>
          <TextVideoBox data={data} />
        </CardBody>
      </Card>
    </Box>
  )
}

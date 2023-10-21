import { memo } from 'react'

import { Box } from '@chakra-ui/react'

import deepEqual from 'deep-equal'

import { FooterProps } from './footer'
import { Wrapper } from './Wrapper'

export const Footer = memo(
  ({ siteInfo, socialMedia, recommendation }: FooterProps) => {
    return (
      <Box as="footer" width="full" minH="fit-content" p={6} bg="gray.700">
        <Wrapper
          siteInfo={siteInfo}
          socialMedia={socialMedia}
          recommendation={recommendation}
        />
      </Box>
    )
  },
  (prevProps, nextProps) =>
    deepEqual(prevProps.recommendation, nextProps.recommendation, {
      strict: true,
    }),
)

Footer.displayName = 'Footer'

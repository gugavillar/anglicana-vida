import { Flex } from '@chakra-ui/react'

import { ContainerProps } from './container'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

export const Container = ({
  children,
  menuItens,
  siteInfo,
  socialMedia,
  recommendation,
}: ContainerProps) => {
  return (
    <Flex direction="column" w="full" minH="100vh">
      <Navbar menuItens={menuItens} />
      <Flex direction="column" flex={1} as="main">
        {children}
      </Flex>
      <Footer
        siteInfo={siteInfo}
        socialMedia={socialMedia}
        recommendation={recommendation}
      />
    </Flex>
  )
}

import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

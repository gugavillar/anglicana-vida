import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { QueryClient, QueryClientProvider } from 'react-query'

import { RootLayout } from '@/components'

import { theme } from '@/theme'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RootLayout>
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

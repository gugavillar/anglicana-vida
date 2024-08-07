import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { GoogleAnalytics } from 'nextjs-google-analytics'
import { QueryClient, QueryClientProvider } from 'react-query'

import { RootLayout } from '@/components'

import { theme } from '@/theme'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RootLayout isDevelopment={isDevelopment}>
          {!isDevelopment && <GoogleAnalytics trackPageViews />}
          <Component {...pageProps} />
        </RootLayout>
      </QueryClientProvider>
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

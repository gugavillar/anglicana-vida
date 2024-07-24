import { AppProps } from 'next/app'

import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import { ChakraProvider } from '@chakra-ui/react'

import { GoogleAnalytics } from 'nextjs-google-analytics'
import { clarity } from 'react-microsoft-clarity'
import { QueryClient, QueryClientProvider } from 'react-query'

import { RootLayout } from '@/components'

import { theme } from '@/theme'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (!isDevelopment) {
    clarity.init('nc3dhidq1p')
  }
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RootLayout>
          {!isDevelopment && <GoogleAnalytics trackPageViews />}
          <Component {...pageProps} />
        </RootLayout>
      </QueryClientProvider>
      <PrismicPreview repositoryName={repositoryName} />
    </ChakraProvider>
  )
}

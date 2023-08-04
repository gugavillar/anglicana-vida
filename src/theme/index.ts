import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { colors } from './colors'

import type { StyleFunctionProps } from '@chakra-ui/styled-system'

export const theme = extendTheme({
  colors,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white', 'pampas.100')(props),
      },
    }),
  },
})

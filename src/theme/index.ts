import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'
import { fonts } from './fonts'

export const theme = extendTheme({
  colors,
  components,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
})

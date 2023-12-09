import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'


const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark', // You can set it to 'dark' if you want dark mode by default
  },
  colors: {
    mode: {
      dark: {
        background: '#1a202c',
        text: '#e2e8f0',
      },
    },
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  }
});

export default theme
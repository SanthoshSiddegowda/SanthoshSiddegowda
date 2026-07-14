import { defineTheme } from 'pinceau'

const geist = "'Geist Variable', 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

export default defineTheme({
  font: {
    sans: geist
  },
  typography: {
    font: {
      display: geist,
      body: geist
    }
  }
})

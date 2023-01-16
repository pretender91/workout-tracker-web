import { MantineProvider } from '@mantine/core'
import { Routes } from 'src/routes/routes'

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <Routes />
    </MantineProvider>
  )
}

export default App

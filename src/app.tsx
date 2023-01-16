import { MantineProvider, useMantineTheme } from '@mantine/core'

function App() {
  const theme = useMantineTheme()

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <div>app</div>
    </MantineProvider>
  )
}

export default App

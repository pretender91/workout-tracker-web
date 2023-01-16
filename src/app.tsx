import { MantineProvider } from '@mantine/core'
import { graphqlClient } from 'src/graphql-client'
import { Routes } from 'src/routes/routes'
import { Provider as UrqlProvider } from 'urql'

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <UrqlProvider value={graphqlClient}>
        <Routes />
      </UrqlProvider>
    </MantineProvider>
  )
}

export default App

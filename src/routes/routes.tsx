import { useRoute, useRouter } from 'src/router'
import { LoginPage } from 'src/routes/login/login.page'
import { MainPage } from 'src/routes/main/main.page'
import { RegistrationPage } from 'src/routes/registration/registration.page'

export function Routes() {
  const { RouteProvider } = useRouter()

  return (
    <RouteProvider>
      <CurrentRoute />
    </RouteProvider>
  )
}

function CurrentRoute() {
  const route = useRoute()

  switch (route.name) {
    case 'main':
      return <MainPage />
    case 'login':
      return <LoginPage />
    case 'registration':
      return <RegistrationPage />
    default:
      return <div>404</div>
  }
}

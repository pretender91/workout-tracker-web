import { useRoute, useRouter } from 'src/router'
import { LoginPage } from 'src/routes/login/login.page'
import { MainPage } from 'src/routes/main/main.page'
import { RegistrationPage } from 'src/routes/registration/registration.page'
import { SettingsPage } from 'src/routes/settings/settings.page'
import { StatsPage } from 'src/routes/stats/stats.page'
import ProfilePage from './edit-profile/edit-profile.page'

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
    case 'stats':
      return <StatsPage />
    case 'settings':
      return <SettingsPage />
    case 'profile':
      return <ProfilePage />
    case 'login':
      return <LoginPage />
    case 'registration':
      return <RegistrationPage />
    default:
      return <div>404</div>
  }
}

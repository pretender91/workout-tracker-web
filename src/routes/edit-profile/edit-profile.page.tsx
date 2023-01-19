import { AppShell } from 'src/components/app-shell/app-shell'
import Breadcrubms from 'src/components/breadcrumbs/breadcrubms'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import { useRouter } from 'src/router'
import { ProfileForm } from './components/profile-form/profile-form'

function ProfilePage() {
  useAuthRoute()
  const router = useRouter()

  return (
    <AppShell
      leftSlot={
        <Breadcrubms {...router.routes.settings().link} label={'Settings'} />
      }
      title="Profile"
    >
      <ProfileForm />
    </AppShell>
  )
}

export default ProfilePage

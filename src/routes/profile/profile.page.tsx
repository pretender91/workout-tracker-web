import { useState } from 'react'
import { AppShell } from 'src/components/app-shell/app-shell'
import Breadcrubms from 'src/components/breadcrumbs/breadcrubms'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import { useRouter } from 'src/router'
import ProfileCard from './components/profile-card/profile-card'
import { ProfileForm } from './components/profile-form/profile-form'

function ProfilePage() {
  useAuthRoute()

  const router = useRouter()
  const [mode, setMode] = useState<'edit' | 'view'>('view')

  return (
    <AppShell
      leftSlot={
        <Breadcrubms {...router.routes.settings().link} label={'Settings'} />
      }
      title="Profile"
    >
      {mode === 'view' ? (
        <ProfileCard
          onClick={() => {
            setMode('edit')
          }}
        />
      ) : (
        <ProfileForm
          onClick={() => {
            setMode('view')
          }}
        />
      )}
    </AppShell>
  )
}

export default ProfilePage

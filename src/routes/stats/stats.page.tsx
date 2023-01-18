import { AppShell } from 'src/components/app-shell/app-shell'
import Breadcrubms from 'src/components/breadcrumbs/breadcrubms'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import { useRouter } from 'src/router'

export function StatsPage() {
  useAuthRoute()
  const router = useRouter()

  return (
    <AppShell
      title={'Stats'}
      leftSlot={<Breadcrubms {...router.routes.main().link} label={'Main'} />}
    >
      Stats
    </AppShell>
  )
}

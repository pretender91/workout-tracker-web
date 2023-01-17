import { AppShell } from 'src/components/app-shell/app-shell'
import { useAuthRoute } from 'src/hooks/use-auth-route'

export function StatsPage() {
  useAuthRoute()

  return <AppShell title={'Stats'}>Stats</AppShell>
}

import { AppShell } from 'src/components/app-shell/app-shell'
import DataCard from 'src/components/data-card/data-card'
import { useAuthRoute } from 'src/hooks/use-auth-route'

export function StatsPage() {
  useAuthRoute()

  return (
    <AppShell title={'Stats'}>
      <DataCard title={'Stat 1'} content={<div>Stat: 1</div>}></DataCard>
      <DataCard title={'Stat 2'} content={<div>Stat: 2</div>}></DataCard>
      <DataCard title={'Stat 3'} content={<div>Stat: 3</div>}></DataCard>
    </AppShell>
  )
}

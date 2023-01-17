import { AppShell } from 'src/components/app-shell/app-shell'
import MuscleGroupPicker from 'src/components/muscle-group-picker/muscle-group-picker'
import { useAuthRoute } from 'src/hooks/use-auth-route'

export function MainPage() {
  useAuthRoute()

  return (
    <AppShell title={'Calendar'}>
      <MuscleGroupPicker />
    </AppShell>
  )
}

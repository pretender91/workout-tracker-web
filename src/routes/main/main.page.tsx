import { AppShell } from 'src/components/app-shell/app-shell'
import MuscleGroupPicker from 'src/components/muscle-group-picker/muscle-group-picker'

export function MainPage() {
  return (
    <AppShell title={'Calendar'}>
      <MuscleGroupPicker />
    </AppShell>
  )
}

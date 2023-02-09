import { AppShell } from 'src/components/app-shell/app-shell'
import { WorkoutCard } from './components/workout-card/workout-card'

export function WorkoutPage() {
  return (
    <AppShell title="Workouts">
      <WorkoutCard />
    </AppShell>
  )
}

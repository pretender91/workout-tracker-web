import { loginRoute } from 'src/routes/login/login.route'
import { mainRoute } from 'src/routes/main/main.route'
import { registrationRoute } from 'src/routes/registration/registration.route'
import { settingsRoute } from 'src/routes/settings/settings.route'
import { statsRoute } from 'src/routes/stats/stats.route'
import { createRouter, Route } from 'type-route'
import { profileRoute } from './routes/edit-profile/edit-profile.route'
import { workoutRoute } from './routes/workout/workout.route'

export const router = createRouter({
  main: mainRoute,
  stats: statsRoute,
  settings: settingsRoute,
  login: loginRoute,
  registration: registrationRoute,
  profile: profileRoute,
  workout: workoutRoute,
})

export type AppRoute = Route<typeof router.routes>
export type AppRouteNames = keyof typeof router.routes

export const useRoute = router.useRoute

export function useRouter() {
  return router
}

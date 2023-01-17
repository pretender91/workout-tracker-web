import { loginRoute } from 'src/routes/login/login.route'
import { mainRoute } from 'src/routes/main/main.route'
import { registrationRoute } from 'src/routes/registration/registration.route'
import { createRouter } from 'type-route'
import { calendarRoute } from './routes/calendar/calendar.route'

export const router = createRouter({
  main: mainRoute,
  login: loginRoute,
  registration: registrationRoute,
  calendar: calendarRoute,
})

export const useRoute = router.useRoute

export function useRouter() {
  return router
}

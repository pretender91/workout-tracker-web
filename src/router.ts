import { loginRoute } from 'src/routes/login/login.route'
import { mainRoute } from 'src/routes/main/main.route'
import { registrationRoute } from 'src/routes/registration/registration.route'
import { createRouter } from 'type-route'

export const router = createRouter({
  main: mainRoute,
  login: loginRoute,
  registration: registrationRoute,
})

export const useRoute = router.useRoute

export function useRouter() {
  return router
}

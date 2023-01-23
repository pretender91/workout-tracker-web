import useLogoutMutation from 'src/api/use-logout-mutation'
import { useAuthStore } from 'src/stores/auth-store'

export function useLogoutButton() {
  const { session, logout } = useAuthStore()
  const { executeMutation } = useLogoutMutation()

  async function logoutUser() {
    if (session) {
      await executeMutation({})
      logout()
    }
  }

  return { logoutUser }
}

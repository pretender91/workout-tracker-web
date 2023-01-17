import { useEffect } from 'react'
import { useRouter } from 'src/router'
import { useAuthStore } from 'src/stores/auth-store'

export const useAuthRoute = () => {
  const router = useRouter()
  const { session } = useAuthStore()

  useEffect(() => {
    if (!session) {
      router.routes.login().push()
    }
  }, [session])
}

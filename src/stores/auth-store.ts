import { Session } from 'src/graphql-schema/graphql'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthStore = {
  session?: Session
  login: (session: Session) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      session: undefined,
      login: (session: Session) => set({ session }),
      logout: () => set({ session: undefined }),
    }),
    {
      name: 'auth',
      partialize: (state) => ({ session: state.session }),
    },
  ),
)

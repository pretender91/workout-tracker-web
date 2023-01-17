import { Session, User } from 'src/graphql-schema/graphql'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SessionWithoutUser = Omit<Session, 'user'>

type AuthStore = {
  session?: SessionWithoutUser
  user?: User
  login: (session: SessionWithoutUser, user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      session: undefined,
      user: undefined,
      login: (session: SessionWithoutUser, user: User) =>
        set({ session, user }),
      logout: () => set({ session: undefined, user: undefined }),
    }),
    {
      name: 'auth',
      partialize: (state) => ({ session: state.session, user: state.user }),
    },
  ),
)

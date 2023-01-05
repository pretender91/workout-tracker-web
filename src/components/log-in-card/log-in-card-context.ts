import { createContext } from 'react'

const LoginCardContext = createContext({
  closeLoginCard: () => {},
  openLoginCard: () => {},
  isLoginCardOpened: true,
})

export default LoginCardContext

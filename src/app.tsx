import { useMemo, useState } from 'react'
import BaseLayout from './components/base-layout/base-layout'
import LoginCard from './components/log-in-card/log-in-card'
import LoginCardContext from './components/log-in-card/log-in-card-context'

function App() {
  const [isLoginCardOpened, setIsLoginCardOpened] = useState(true)
  const loginContextValue = useMemo(
    () => ({
      closeLoginCard: () => {
        setIsLoginCardOpened(false)
      },
      openLoginCard: () => {
        setIsLoginCardOpened(true)
      },
      isLoginCardOpened,
    }),
    [isLoginCardOpened],
  )
  return (
    <LoginCardContext.Provider value={loginContextValue}>
      <BaseLayout>
        <div className="text-center flex h-full justify-center items-center bg-gray-400 flex-col gap-4">
          <LoginCard contextValue={loginContextValue} />
        </div>
      </BaseLayout>
    </LoginCardContext.Provider>
  )
}

export default App

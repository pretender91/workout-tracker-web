import { useMemo, useState } from 'react'
import BaseLayout from './components/base-layout/base-layout'
import LoginCardContext from './components/log-in-card/log-in-card-context'
import MuscleGroupPicker from './components/muscle-group-picker/muscle-group-picker'

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
        <div className="text-center bg-white flex h-full justify-center items-center flex-col gap-4">
          {/* <LoginCard contextValue={loginContextValue} /> */}

          <MuscleGroupPicker />
        </div>
      </BaseLayout>
    </LoginCardContext.Provider>
  )
}

export default App

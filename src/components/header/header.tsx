import { useContext } from 'react'
import Button from '../button/button'
import LoginCardContext from '../log-in-card/log-in-card-context'

function Header() {
  const loginCardContext = useContext(LoginCardContext)
  return (
    <header className="bg-blue-700 text-white text-lg flex items-center p-4 justify-between">
      <nav className="flex gap-2">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Workouts</a>
      </nav>
      <div>
        <Button
          onClick={() => {
            loginCardContext.openLoginCard()
          }}
        >
          Log in
        </Button>
      </div>
    </header>
  )
}

export default Header

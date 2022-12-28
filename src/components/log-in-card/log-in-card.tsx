import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Button from '../button/button'
import Card from '../card/card'
import Input from '../input/input'
import PasswordInput from '../password-input/password-input'

function LoginCard(props: {
  contextValue: {
    isLoginCardOpened: boolean
    openLoginCard: () => void
    closeLoginCard: () => void
  }
}) {
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')

  if (!props.contextValue.isLoginCardOpened) {
    return null
  }

  return (
    <Card>
      <div className="relative">
        <h1 className="my-3 text-4xl ">Log in</h1>
        <XMarkIcon
          onClick={() => {
            props.contextValue.closeLoginCard()
          }}
          className="absolute w-6 right-2 top-0"
        />
      </div>

      <div className="flex flex-col justify-center gap-6 max-w-xs my-0 mx-auto min-h-min sm:h-screen ">
        <Input
          label="Name"
          name="name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <PasswordInput
          label="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />

        <Button className="w-full">Log in</Button>
      </div>
    </Card>
  )
}

export default LoginCard

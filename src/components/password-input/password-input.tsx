import { useState } from 'react'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

function PasswordInput(props: PasswordInputProps) {
  const [isPasswordType, setIsPasswordType] = useState(true)
  return (
    <label className=" relative text-xs flex flex-col justify-start items-start gap-1 max-w-xs">
      {props.label}
      <input
        type={isPasswordType ? 'password' : 'text'}
        {...props}
        className="outline-gray-400 outline-1 text-sm p-2 text-black h-8 w-full outline-none rounded-md"
      />
      <div
        className="absolute right-2 top-6 text-black cursor-pointer"
        onClick={() => {
          setIsPasswordType(!isPasswordType)
        }}
      >
        {isPasswordType ? (
          <EyeIcon className="hover:text-blue-400 text-black w-6" />
        ) : (
          <EyeSlashIcon className=" hover:text-blue-400 w-6 text-black" />
        )}
      </div>
    </label>
  )
}

export default PasswordInput

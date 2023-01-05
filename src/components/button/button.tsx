import { ReactNode } from 'react'

function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    className?: string
  },
) {
  return (
    <button
      {...props}
      className={`bg-blue-700 rounded-md p-2 text-xl text-white hover:bg-blue-600 max-w-xs w-28 ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button

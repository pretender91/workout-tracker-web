type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  className?: string
}

function Input(props: InputProps) {
  return (
    <label
      className={`text-xs flex flex-col justify-start items-start gap-1 max-w-xs ${props.className}`}
    >
      {props.label}
      <input
        {...props}
        className=" outline-gray-400 outline-1 text-sm p-2 text-black h-8 w-full outline-none rounded-md"
      />
    </label>
  )
}

export default Input

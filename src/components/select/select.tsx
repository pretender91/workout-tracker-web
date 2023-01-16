import './select.css'

type SelectProps<T> = {
  name?: string
  onChange: (value: T) => void
  placeholder?: string
  options: Array<{
    value: string | number
    name: string
  }>

  value?: T
  className?: string
}
function Select<T>(props: SelectProps<T>) {
  return (
    <>
      <label
        htmlFor="body-direction"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        value={props.value as string | number}
        id="body-direction"
        className={`select-arrow appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${props.className}`}
        onChange={(e) => {
          props.onChange(e.target.value as unknown as T)
        }}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select

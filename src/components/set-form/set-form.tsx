import Button from '../button/button'
import Input from '../input/input'

function SetForm(props: { onAdd: () => void }) {
  return (
    <form className="flex gap-3 items-end justify-start w-full">
      <Input label="Reps" className="w-16" />
      <Input label="Weight" className="w-16" />
      <Button
        onClick={() => {
          props.onAdd()
        }}
        className="h-8 w-16 p-2 flex items-center justify-center"
      >
        Add
      </Button>
    </form>
  )
}

export default SetForm

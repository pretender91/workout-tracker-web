import { Button, Drawer, Flex, Select } from '@mantine/core'
import { Exercise } from '../workout-card/use-workout-card'
import {
  exerciseOptions,
  useExeriseDrawerForm,
} from './use-exercise-drawer-form'

export function ExerciseDrawerForm(props: {
  exerciseBlockId?: string
  isOpened: boolean
  onClose: () => void
  onSubmit: (exercise: Exercise) => void
}) {
  const { form, submit } = useExeriseDrawerForm({
    onSubmit: props.onSubmit,
    exerciseBlockId: props.exerciseBlockId,
    onClose: props.onClose,
  })

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
  }
  return (
    <Drawer
      styles={() => ({
        drawer: {
          overflow: 'scroll',
        },
      })}
      opened={props.isOpened}
      onClose={props.onClose}
      title="Add set"
      position="right"
      padding="xl"
      size="95%"
    >
      <form onSubmit={onSubmit} style={{ overflow: 'auto' }}>
        <Flex direction="column" gap={15}>
          <Select
            placeholder="Select exercise"
            data={exerciseOptions}
            {...form.getInputProps('name')}
          />
          <Button type="submit">Add exercise</Button>
        </Flex>
      </form>
    </Drawer>
  )
}

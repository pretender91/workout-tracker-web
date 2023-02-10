import { Button, Drawer, Select, Title } from '@mantine/core'
import { Exercise } from '../workout-card/use-workout-card'
import {
  exerciseOptions,
  useExeriseDrawerForm,
} from './use-exercise-drawer-form'

import styles from './exercise-drawer-form.module.css'

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
        root: {
          padding: 0,
        },
        header: {
          padding: 16,
        },
        drawer: {
          overflow: 'scroll',
        },
      })}
      opened={props.isOpened}
      onClose={props.onClose}
      title={<Title order={3}>Add exercise</Title>}
      position="right"
      size="95%"
    >
      <form onSubmit={onSubmit}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Select
              style={{
                alignSelf: 'center',
              }}
              placeholder="Select exercise"
              data={exerciseOptions}
              {...form.getInputProps('name')}
            />
          </div>

          <div className={styles.navigation}>
            <Button fullWidth type="submit">
              Add exercise
            </Button>
          </div>
        </div>
      </form>
    </Drawer>
  )
}

import { SelectItem } from '@mantine/core'
import { useForm } from '@mantine/form'
import { nanoid } from 'nanoid'
import { Exercise } from '../workout-card/use-workout-card'

export const exerciseOptions: SelectItem[] = [
  {
    label: 'Bench Press',
    value: 'bench_press',
  },
  {
    label: 'Squat',
    value: 'squat',
  },
  {
    label: 'Deadlift',
    value: 'deadlift',
  },
]

function createInitialValues(blockId?: string) {
  return {
    id: '',
    blockId,
    name: '',
    data: [{ reps: undefined, weight: undefined, key: nanoid() }],
  }
}

export function useExeriseDrawerForm({
  exerciseBlockId,
  onSubmit,
  onClose,
}: {
  exerciseBlockId?: string
  onSubmit: (exercise: Exercise) => void
  onClose: () => void
}) {
  const form = useForm({
    initialValues: createInitialValues(exerciseBlockId),

    validate: {
      name: (value) => {
        if (value.length < 1) {
          return 'Name is required'
        }
        return null
      },
    },
  })

  function submit() {
    return () => {
      form.onSubmit((values) => {
        onSubmit({ ...values, blockId: exerciseBlockId, id: nanoid() })
      })()

      if (form.isValid()) {
        form.reset()
        onClose()
      }
    }
  }

  return {
    form,
    submit,
  }
}

import { useForm } from '@mantine/form'
import { useEffect } from 'react'
import { Exercise } from '../workout-card/use-workout-card'

export function useSetItem({
  item,
  onSubmit,
}: {
  item: Exercise
  onSubmit: (exercise: Exercise) => void
}) {
  const form = useForm({
    initialValues: {
      ...item,
    },
  })

  useEffect(() => {
    form.setValues({ ...item })
  }, [item])

  function addReps() {
    form.insertListItem(
      'data',

      { reps: undefined, weight: undefined },
    )
  }

  function submit() {
    return () => {
      form.onSubmit(onSubmit)()
    }
  }

  function removeSetItem(index: number) {
    form.removeListItem('data', index)
  }

  return { form, addReps, removeSetItem, submit }
}

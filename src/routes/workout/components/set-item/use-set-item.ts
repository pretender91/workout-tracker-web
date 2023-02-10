import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import { Exercise } from '../workout-card/use-workout-card'

export function useSetItem({
  item,
  onSubmit,
}: {
  item: Exercise
  onSubmit: (exercise: Exercise) => void
}) {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  function openDrawer() {
    setIsDrawerOpened(true)
  }

  function closeDrawer() {
    setIsDrawerOpened(false)
  }

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
      closeDrawer()
    }
  }

  function removeSetItem(index: number) {
    form.removeListItem('data', index)
  }

  return {
    form,
    isDrawerOpened,
    openDrawer,
    closeDrawer,
    addReps,
    removeSetItem,
    submit,
  }
}

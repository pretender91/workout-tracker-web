import { useForm } from '@mantine/form'
import { useEffect, useMemo, useState } from 'react'
import { Exercise } from '../workout-card/use-workout-card'
import { formValuesToItems, itemToFormValues } from './helpers'

export type FormValueItems = {
  reps: number
  weight: number
  name: string
  id: string
}[][]

export type FormValues = {
  items: FormValueItems
}

export function useSupersetItem({
  items,
  onSubmit,
}: {
  items: Exercise[]
  onSubmit: (exercises: Exercise[]) => void
}) {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  function openDrawer() {
    setIsDrawerOpened(true)
  }

  function closeDrawer() {
    setIsDrawerOpened(false)
  }

  const formattedName = useMemo(() => {
    const names = items.map((i) => i.name)

    return names.join('/')
  }, [items.length])

  const form = useForm({
    initialValues: {
      items: itemToFormValues(items),
    },
  })

  useEffect(() => {
    form.setValues({ items: itemToFormValues(items) })
  }, [items.length])

  function addReps() {
    form.insertListItem(
      'items',
      items.map((item) => {
        return {
          reps: undefined,
          weight: undefined,
          name: item.name,
          id: item.id,
        }
      }),
    )
  }

  function submit() {
    return () => {
      console.log('f-t-e', formValuesToItems(form.values))
      onSubmit(formValuesToItems(form.values))
      closeDrawer()
    }
  }

  function removeFormItem(index: number) {
    form.removeListItem('items', index)
  }

  return {
    formattedName,
    form,
    isDrawerOpened,
    openDrawer,
    closeDrawer,
    addReps,
    submit,
    removeFormItem,
  }
}

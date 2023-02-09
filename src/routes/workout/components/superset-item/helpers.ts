import { Exercise } from '../workout-card/use-workout-card'
import { FormValues } from './use-superset-item'

export function itemToFormValues(items: Exercise[]) {
  return items.reduce(
    (
      acc: { reps: number; weight: number; name: string; id: string }[][],
      item: Exercise,
    ) => {
      item.data.forEach((d: any, index: number) => {
        if (!acc[index]) {
          acc[index] = []
        }
        acc[index].push({ ...d, name: item.name, id: item.id })
      })
      return acc
    },
    [],
  )
}

export function formValuesToItems(values: FormValues): Exercise[] {
  const flat = values.items.flatMap((item) => item)

  const exercisesMap = flat.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].data.push({ reps: item.reps, weight: item.weight })
    } else {
      acc[item.id] = {
        id: item.id,
        name: item.name,
        data: [{ reps: item.reps, weight: item.weight }],
      }
    }
    return acc
  }, {} as { [key: string]: Exercise })
  return Object.values(exercisesMap)
}

import { nanoid } from 'nanoid'
import { useState } from 'react'

export type Exercise = {
  id: string
  name: string
  data: { reps?: number; weight?: number }[]
  blockId?: string
}

export type ExerciseBlock = {
  id: string
  exercises: Exercise[]
}

export function useWorkoutCard() {
  const [exerciseBlocks, setExerciseBlocks] = useState<ExerciseBlock[]>([])

  const [blockId, setBlockId] = useState<string | undefined>(undefined)

  const [isExerciseDrawerOpened, setIsExerciseDrawerOpened] = useState(false)

  function openExerciseDrawer(id?: string) {
    setIsExerciseDrawerOpened(true)
    setBlockId(id)
  }

  function closeExerciseDrawer() {
    setIsExerciseDrawerOpened(false)
  }

  function createExerciseBlock() {
    return {
      id: nanoid(),
      exercises: [] as Exercise[],
    }
  }

  function addExercise(exercise: Exercise) {
    const exerciseBlock = exerciseBlocks.find(
      (item) => item.id === exercise.blockId,
    )

    if (exerciseBlock) {
      exerciseBlock.exercises.push(exercise)
      exerciseBlock.exercises.forEach((item) => {
        item.blockId = exerciseBlock.id
      })
      setExerciseBlocks([...exerciseBlocks])
    } else {
      const exerciseBlock = createExerciseBlock()
      exerciseBlock.exercises.push(exercise)
      setExerciseBlocks([...exerciseBlocks, exerciseBlock])
    }
  }

  function removeWorkoutBlock(id: string) {
    const updatedWorkoutBlock = exerciseBlocks.filter(
      (block) => block.id !== id,
    )
    setExerciseBlocks(updatedWorkoutBlock)
  }

  function updateExercise(exercise: Exercise) {
    const updatedExerciseBlocks = exerciseBlocks.map((block) => {
      if (block.id === exercise.blockId) {
        const updatedExercises = block.exercises.map((item) => {
          if (item.id === exercise.id) {
            return exercise
          }
          return item
        })
        return {
          ...block,
          exercises: updatedExercises,
        }
      }
      return block
    })
    setExerciseBlocks(updatedExerciseBlocks)
  }

  function updatedExercises(exercises: Exercise[]) {
    exercises.forEach((exercise) => {
      updateExercise(exercise)
    })
  }

  return {
    addExercise,
    openExerciseDrawer,
    closeExerciseDrawer,
    removeWorkoutBlock,
    updateExercise,
    updatedExercises,
    isExerciseDrawerOpened,
    blockId,
    exerciseBlocks,
  }
}
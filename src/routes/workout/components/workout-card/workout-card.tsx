import { Button, Card, Flex } from '@mantine/core'
import { ExerciseDrawerForm } from '../exercise-drawer-form/exercise.drawer-form'
import { SetItem } from '../set-item/set-item'
import { SettingsBlock } from '../settings-block/settings-block'
import { SupersetItem } from '../superset-item/superset-item'
import { useWorkoutCard } from './use-workout-card'

export function WorkoutCard() {
  const {
    addExercise,
    openExerciseDrawer,
    closeExerciseDrawer,
    removeWorkoutBlock,
    updateExercise,
    updatedExercises,
    isExerciseDrawerOpened,
    blockId,
    exerciseBlocks,
  } = useWorkoutCard()

  return (
    <Card>
      <h1>Workout</h1>
      <Flex direction="column" gap={20}>
        {exerciseBlocks.map((block) => {
          return (
            <Flex
              key={block.id}
              align="center"
              style={{
                width: '100%',
                position: 'relative',
              }}
            >
              {block.exercises.length > 1 ? (
                <SupersetItem items={block.exercises} onSubmit={() => {}} />
              ) : (
                <SetItem item={block.exercises[0]} onSubmit={updateExercise} />
              )}

              <SettingsBlock
                onMakeSeuperset={() => openExerciseDrawer(block.id)}
                onRemove={() => removeWorkoutBlock(block.id)}
              />
            </Flex>
          )
        })}
        <Button variant="outline" onClick={() => openExerciseDrawer()}>
          Add exercise
        </Button>
      </Flex>
      <ExerciseDrawerForm
        exerciseBlockId={blockId}
        isOpened={isExerciseDrawerOpened}
        onClose={closeExerciseDrawer}
        onSubmit={addExercise}
      />
    </Card>
  )
}

import { Button, Card, Flex, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
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
    <Card mih={'100%'}>
      <Flex justify={'space-between'} align="center" mb={20}>
        <Title>Workout</Title>

        <Button
          leftIcon={<IconPlus size={18} />}
          variant="outline"
          size="xs"
          onClick={() => openExerciseDrawer()}
          styles={{
            leftIcon: {
              marginRight: 2,
            },
          }}
          style={{
            marginTop: 5,
          }}
        >
          exercise
        </Button>
      </Flex>
      <Flex direction="column" gap={20} justify="space-between">
        {exerciseBlocks.map((block) => {
          return (
            <Flex
              key={block.id}
              align="center"
              style={{
                width: '100%',
              }}
            >
              {block.exercises.length > 1 ? (
                <SupersetItem
                  items={block.exercises}
                  onSubmit={updatedExercises}
                />
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

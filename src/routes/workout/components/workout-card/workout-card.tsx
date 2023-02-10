import { Button, Card, Flex, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
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
    onDragEnd,
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {exerciseBlocks.map((block, index) => {
                  return (
                    <Draggable
                      key={index}
                      index={index}
                      draggableId={index.toString()}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            margin: '15px 0',
                          }}
                        >
                          <Flex
                            key={block.id}
                            align="center"
                            style={{
                              width: '100%',
                            }}
                            gap={20}
                          >
                            {block.exercises.length > 1 ? (
                              <SupersetItem
                                items={block.exercises}
                                onSubmit={updatedExercises}
                              />
                            ) : (
                              <SetItem
                                item={block.exercises[0]}
                                onSubmit={updateExercise}
                              />
                            )}

                            <SettingsBlock
                              onMakeSeuperset={() =>
                                openExerciseDrawer(block.id)
                              }
                              onRemove={() => removeWorkoutBlock(block.id)}
                            />
                          </Flex>
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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

import {
  ActionIcon,
  Button,
  Drawer,
  Flex,
  NumberInput,
  Title,
} from '@mantine/core'
import { IconTrash } from '@tabler/icons'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Exercise } from '../workout-card/use-workout-card'
import styles from './set-item.module.css'
import { useSetItem } from './use-set-item'

export function SetItem(props: {
  item: Exercise
  onSubmit: (exercise: Exercise) => void
}) {
  const {
    form,
    isDrawerOpened,
    openDrawer,
    closeDrawer,
    addReps,
    removeSetItem,
    submit,
  } = useSetItem({
    item: props.item,
    onSubmit: props.onSubmit,
  })

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
  }

  return (
    <>
      <Title order={5} onClick={openDrawer} style={{ width: '100%' }}>
        {props.item.name}
      </Title>

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
        opened={isDrawerOpened}
        onClose={closeDrawer}
        title={<Title order={3}>{props.item.name}</Title>}
        position="right"
        size="95%"
      >
        <DragDropContext
          onDragEnd={({ destination, source }) => {
            if (!destination) {
              return
            }
            form.reorderListItem('data', {
              from: source.index,
              to: destination.index,
            })
          }}
        >
          <form onSubmit={onSubmit}>
            <Droppable droppableId="dnd-list" direction="vertical">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={styles.setItem}
                >
                  <div className={styles.setContent}>
                    {form.values.data.map((_, index) => {
                      return (
                        <Draggable
                          key={index}
                          index={index}
                          draggableId={index.toString()}
                        >
                          {(provided) => (
                            <Flex
                              direction="column"
                              gap={10}
                              justify="space-between"
                              key={index}
                              style={{ margin: '10px 0' }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Flex
                                {...provided.dragHandleProps}
                                justify="space-between"
                                align="center"
                                style={{
                                  marginTop: '10px',
                                }}
                              >
                                <Title order={6}>Set {index + 1}</Title>
                                <ActionIcon
                                  disabled={
                                    index === 0 && form.values.data.length <= 1
                                  }
                                  onClick={() => removeSetItem(index)}
                                  color="red"
                                  style={{
                                    alignSelf: 'flex-end',
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                  }}
                                >
                                  <IconTrash size={20} />
                                </ActionIcon>
                              </Flex>
                              <Flex
                                gap={10}
                                justify="space-between"
                                align="center"
                              >
                                <NumberInput
                                  size="xs"
                                  {...form.getInputProps(`data.${index}.reps`)}
                                  placeholder="Repetitions"
                                />
                                <NumberInput
                                  size="xs"
                                  {...form.getInputProps(
                                    `data.${index}.weight`,
                                  )}
                                  placeholder="Weight"
                                  icon="Kg"
                                />
                              </Flex>
                            </Flex>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>

                  <div className={styles.setNavigation}>
                    <Button fullWidth onClick={addReps} variant="outline">
                      Add set
                    </Button>
                    <Button
                      fullWidth
                      color="green"
                      variant="outline"
                      type="submit"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              )}
            </Droppable>
          </form>
        </DragDropContext>
      </Drawer>
    </>
  )
}

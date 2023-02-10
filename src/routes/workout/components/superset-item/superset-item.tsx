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
import styles from './superset-item.module.css'
import { useSupersetItem } from './use-superset-item'

export function SupersetItem(props: {
  items: Exercise[]
  onSubmit: (exercises: Exercise[]) => void
}) {
  const {
    formattedName,
    form,
    isDrawerOpened,
    openDrawer,
    closeDrawer,
    addReps,
    submit,
    removeFormItem,
  } = useSupersetItem({
    items: props.items,
    onSubmit: props.onSubmit,
  })

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
  }

  return (
    <>
      <Title order={5} onClick={openDrawer} style={{ width: '100%' }}>
        {formattedName}
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
        title={<Title order={3}>{formattedName}</Title>}
        position="right"
        size="95%"
      >
        <DragDropContext
          onDragEnd={({ destination, source }) => {
            if (!destination) {
              return
            }
            form.reorderListItem('items', {
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
                  className={styles.superSetItem}
                >
                  <div className={styles.superSetContent}>
                    {form.values.items.map((group, groupIndex) => {
                      return (
                        <div style={{ margin: '10px 0' }}>
                          <Draggable
                            key={groupIndex}
                            index={groupIndex}
                            draggableId={groupIndex.toString()}
                          >
                            {(provided) => (
                              <Flex
                                key={groupIndex}
                                direction="column"
                                gap={5}
                                justify="space-between"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                              >
                                <Flex
                                  {...provided.dragHandleProps}
                                  justify="space-between"
                                  align="center"
                                  style={{
                                    marginTop: '10px',
                                  }}
                                >
                                  <Title order={6}>Set {groupIndex + 1}</Title>
                                  <ActionIcon
                                    disabled={
                                      groupIndex === 0 &&
                                      form.values.items.length <= 1
                                    }
                                    onClick={() => removeFormItem(groupIndex)}
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

                                {group.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        margin: '5px 0',
                                      }}
                                    >
                                      <Title order={6}>{item.name}</Title>
                                      <Flex
                                        gap={10}
                                        justify="space-between"
                                        align="center"
                                      >
                                        <NumberInput
                                          size="xs"
                                          {...form.getInputProps(
                                            `items.${groupIndex}.${index}.reps`,
                                          )}
                                          placeholder="Repetitions"
                                        />
                                        <NumberInput
                                          size="xs"
                                          {...form.getInputProps(
                                            `items.${groupIndex}.${index}.wieght`,
                                          )}
                                          placeholder="Weight"
                                          icon="Kg"
                                        />
                                      </Flex>
                                    </div>
                                  )
                                })}
                              </Flex>
                            )}
                          </Draggable>
                        </div>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                  <div className={styles.superSetNavigation}>
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

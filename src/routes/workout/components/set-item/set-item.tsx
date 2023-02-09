import {
  Accordion,
  ActionIcon,
  Button,
  Flex,
  NumberInput,
  Title,
} from '@mantine/core'
import { IconCirclePlus, IconX } from '@tabler/icons'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Exercise } from '../workout-card/use-workout-card'
import { useSetItem } from './use-set-item'

export function SetItem(props: {
  item: Exercise
  onSubmit: (exercise: Exercise) => void
}) {
  const { form, addReps, removeSetItem, submit } = useSetItem({
    item: props.item,
    onSubmit: props.onSubmit,
  })

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
  }
  return (
    <Accordion
      chevron={null}
      style={{ borderBottom: '0', outline: 'none', width: '100%' }}
    >
      <Accordion.Item value={props.item.id}>
        <Accordion.Control>
          <Title order={5}>{props.item.name}</Title>
        </Accordion.Control>
        <Accordion.Panel>
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
                  <div {...provided.droppableProps} ref={provided.innerRef}>
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
                                  <IconX size={20} />
                                </ActionIcon>
                              </Flex>
                              <Flex
                                gap={10}
                                justify="space-between"
                                align="center"
                              >
                                <NumberInput
                                  style={{
                                    maxWidth: '135px',
                                  }}
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
                                  style={{
                                    maxWidth: '135px',
                                  }}
                                />
                              </Flex>
                            </Flex>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                    <Flex
                      direction="column"
                      gap={20}
                      style={{
                        marginTop: '20px',
                      }}
                    >
                      <ActionIcon onClick={addReps}>
                        <IconCirclePlus size={36} color="#228be6" />
                      </ActionIcon>

                      <Button
                        fullWidth
                        color="green"
                        variant="outline"
                        type="submit"
                      >
                        Commit
                      </Button>
                    </Flex>
                  </div>
                )}
              </Droppable>
            </form>
          </DragDropContext>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

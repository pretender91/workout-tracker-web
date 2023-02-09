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
import { useSupersetItem } from './use-superset-item'

export function SupersetItem(props: {
  items: Exercise[]
  onSubmit: (exercises: Exercise[]) => void
}) {
  const { formattedName, form, addReps, submit, removeFormItem } =
    useSupersetItem({
      items: props.items,
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
      <Accordion.Item value={formattedName}>
        <Accordion.Control>
          <Title order={5}>{formattedName} (Superset)</Title>
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
                    {form.values.items.map((group, groupIndex) => {
                      return (
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
                                  <IconX size={20} />
                                </ActionIcon>
                              </Flex>

                              {group.map((item, index) => {
                                return (
                                  <div key={index}>
                                    <Title order={6}>{item.name}</Title>
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
                                        style={{
                                          maxWidth: '135px',
                                        }}
                                      />
                                    </Flex>
                                  </div>
                                )
                              })}
                            </Flex>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

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

                <Button fullWidth color="green" variant="outline" type="submit">
                  Commit
                </Button>
              </Flex>
            </form>
          </DragDropContext>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

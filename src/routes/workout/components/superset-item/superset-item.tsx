import {
  Accordion,
  ActionIcon,
  Button,
  Flex,
  NumberInput,
  Title,
} from '@mantine/core'
import { IconCirclePlus, IconX } from '@tabler/icons'
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
          <form onSubmit={onSubmit}>
            <div>
              {form.values.items.map((group, groupIndex) => {
                return (
                  <Flex
                    key={groupIndex}
                    direction="column"
                    gap={10}
                    justify="space-between"
                    style={{
                      position: 'relative',
                      margin: '10px 0',
                    }}
                  >
                    <Title order={6}>Set {groupIndex + 1}</Title>
                    {group.map((item, index) => {
                      return (
                        <div key={index}>
                          <Title order={6}>{item.name}</Title>
                          <Flex gap={10} justify="space-between" align="center">
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

                    <ActionIcon
                      disabled={
                        groupIndex === 0 && form.values.items.length <= 1
                      }
                      onClick={() => removeFormItem(groupIndex)}
                      color="red"
                      size={36}
                      style={{
                        alignSelf: 'flex-end',
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        marginRight: '-11px',
                        position: 'absolute',
                        right: 0,
                        top: 5,
                      }}
                    >
                      <IconX size={20} />
                    </ActionIcon>
                  </Flex>
                )
              })}
            </div>
            <Flex direction="column" gap={20}>
              <ActionIcon onClick={addReps}>
                <IconCirclePlus size={36} color="#228be6" />
              </ActionIcon>

              <Button fullWidth color="green" variant="outline" type="submit">
                Commit
              </Button>
            </Flex>
          </form>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

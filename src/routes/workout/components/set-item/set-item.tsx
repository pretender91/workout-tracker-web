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
          <form onSubmit={onSubmit}>
            {form.values.data.map((_, index) => {
              return (
                <Flex
                  direction="column"
                  gap={10}
                  justify="space-between"
                  key={index}
                  style={{ margin: '10px 0' }}
                >
                  <Title order={6}>Set {index + 1}</Title>
                  <Flex gap={10} justify="space-between" align="center">
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
                      {...form.getInputProps(`data.${index}.weight`)}
                      placeholder="Weight"
                      icon="Kg"
                      style={{
                        maxWidth: '135px',
                      }}
                    />

                    <ActionIcon
                      disabled={index === 0 && form.values.data.length <= 1}
                      onClick={() => removeSetItem(index)}
                      color="red"
                      size={36}
                      style={{
                        alignSelf: 'flex-end',
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        marginRight: '-11px',
                      }}
                    >
                      <IconX size={20} />
                    </ActionIcon>
                  </Flex>
                </Flex>
              )
            })}

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

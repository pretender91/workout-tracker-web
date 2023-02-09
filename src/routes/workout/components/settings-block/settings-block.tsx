import { ActionIcon, Button, Flex, Popover } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons'
import { useState } from 'react'

export function SettingsBlock(props: {
  onMakeSeuperset: () => void
  onRemove: () => void
}) {
  const [opened, setOpened] = useState(false)
  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={200}
      position="bottom"
      withArrow
      shadow="md"
    >
      <Popover.Target>
        <ActionIcon
          onClick={(e) => {
            e.stopPropagation()
            setOpened(!opened)
          }}
          style={{
            alignSelf: 'flex-start',
            marginTop: '15px',
            padding: 0,
            position: 'absolute',
            right: 10,
          }}
        >
          <IconDotsVertical />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex direction="column" gap={20}>
          <Button onClick={props.onMakeSeuperset}>Make superset</Button>
          <Button onClick={props.onRemove}>Remove</Button>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  )
}

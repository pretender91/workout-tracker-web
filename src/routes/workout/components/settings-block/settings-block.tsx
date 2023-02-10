import { Menu } from '@mantine/core'
import { IconDotsVertical, IconPlus, IconTrash } from '@tabler/icons'
import { useRef, useState } from 'react'

export function SettingsBlock(props: {
  onMakeSeuperset: () => void
  onRemove: () => void
}) {
  const [opened, setOpened] = useState(false)
  const ref = useRef(null)

  return (
    <Menu
      opened={opened}
      onOpen={() => {
        setOpened(true)
      }}
      onClose={() => {
        setOpened(false)
      }}
      position="bottom"
      positionDependencies={[ref]}
    >
      <Menu.Target>
        <div ref={ref}>
          <IconDotsVertical />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconPlus />} onClick={props.onMakeSeuperset}>
          Make superset
        </Menu.Item>
        <Menu.Item icon={<IconTrash />} onClick={props.onRemove}>
          Remove
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

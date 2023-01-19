import { Card, Group, Title } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
import { ReactNode } from 'react'

function DataCard(props: {
  title: ReactNode
  content: ReactNode
  onClick?: () => void
}) {
  return (
    <Card onClick={props.onClick}>
      <Group style={{ justifyContent: 'space-between' }}>
        <Title order={4}>{props.title}</Title>
        <IconChevronRight />
      </Group>
      <div>{props.content}</div>
    </Card>
  )
}

export default DataCard

import { Card, Group, Title, Transition } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
import { ReactNode, useEffect } from 'react'
import { useDataCard } from './use-data-card'

function DataCard(props: {
  title: ReactNode
  content: ReactNode
  fullContent: ReactNode
  onClick?: () => void
  isBreadcrumbShowed?: boolean
}) {
  const { isOpened, openDataCard, closeDataCard } = useDataCard()

  useEffect(() => {
    if (props.isBreadcrumbShowed === false) {
      closeDataCard()
    }
  }, [props.isBreadcrumbShowed])

  return (
    <div>
      <Card
        onClick={() => {
          openDataCard()
          props.onClick?.()
        }}
      >
        <Group style={{ justifyContent: 'space-between' }}>
          <Title order={4}>{props.title}</Title>
          <IconChevronRight />
        </Group>
        <div>{props.content}</div>
      </Card>
      <Transition
        mounted={isOpened}
        transition={'slide-left'}
        duration={250}
        timingFunction="ease"
      >
        {(styles) => (
          <div
            style={{
              ...styles,
              position: 'absolute',
              width: '100%',
              zIndex: 5,
              top: '50px',
            }}
          >
            <Card mih={'90svh'}>
              opened
              {props.fullContent}
            </Card>
          </div>
        )}
      </Transition>
    </div>
  )
}

export default DataCard

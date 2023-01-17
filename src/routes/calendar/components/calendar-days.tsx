import { Card, Group } from '@mantine/core'

function CalendarDays() {
  return (
    <Group noWrap spacing={0}>
      <Card p={10} miw={30}>
        SUN
      </Card>
      <Card p={10} miw={30}>
        MON
      </Card>
      <Card p={10} miw={30}>
        TUE
      </Card>
      <Card p={10} miw={30}>
        WED
      </Card>
      <Card p={10} miw={30}>
        THU
      </Card>
      <Card p={10} miw={30}>
        FRI
      </Card>
      <Card p={10} miw={30}>
        SAT
      </Card>
    </Group>
  )
}

export default CalendarDays

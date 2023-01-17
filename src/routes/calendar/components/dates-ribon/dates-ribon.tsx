import { Card, Group } from '@mantine/core'
import './index.css'
import useDatesRibbon from './use-dates-ribbon'

function DatesRibbon() {
  const { models, handlers } = useDatesRibbon()

  return (
    <>
      <Group {...handlers.swipeHandlers} noWrap spacing={0}>
        {models.weekDates.map((meta) => {
          return (
            <Card
              miw={30}
              p={10}
              key={meta.dayOfMonth}
              onClick={() => handlers.handleDateClick(meta.date)}
            >
              <span
                className={`weekDateItem ${meta.isActive ? 'isActive' : ''} ${
                  meta.isToday ? 'isToday' : ''
                }`}
              >
                {meta.dayOfMonth}
              </span>
            </Card>
          )
        })}
      </Group>
      <div onClick={handlers.goToPrevWeek}>prev</div>
      <div onClick={handlers.goToNextWeek}>next</div>
    </>
  )
}

export default DatesRibbon

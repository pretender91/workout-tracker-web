import { useMemo, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import {
  addDays,
  addWeeks,
  getDateStrPresentation,
  startOfWeek,
  subWeeks,
} from './helpers/date-helpers'
import useDates from './helpers/use-dates'

//

function useDatesRibbon() {
  const dates = useDates()

  const [selectedDate, setSelectedDate] = useState(new Date())

  const today = new Date()

  function goToDate(date: Date) {
    setSelectedDate(date)
  }

  const weekDates = useMemo(() => {
    const startWeekDate = startOfWeek(selectedDate)
    const datesMeta = [startWeekDate]
    console.log(datesMeta)
    for (let i = 0; i < 6; i++) {
      datesMeta.push(addDays(startWeekDate, i + 1))
    }
    return datesMeta.map((date: Date) => {
      const dateStr = getDateStrPresentation(date)
      return {
        date,
        dayOfMonth: date.getDate(),
        isToday: dateStr === getDateStrPresentation(today),
        isActive: dateStr === getDateStrPresentation(selectedDate),
      }
    })
  }, [dates, selectedDate, today])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextWeek,
    onSwipedRight: goToPrevWeek,
  })

  function goToNextWeek() {
    goToDate(startOfWeek(addWeeks(selectedDate, 1)))
  }

  function goToPrevWeek() {
    goToDate(startOfWeek(subWeeks(selectedDate, 1)))
  }

  function handleDateClick(date: Date) {
    goToDate(date)
  }

  return {
    models: {
      weekDates,
    },
    handlers: {
      handleDateClick,
      goToNextWeek,
      goToPrevWeek,
      swipeHandlers,
    },
  }
}

export default useDatesRibbon

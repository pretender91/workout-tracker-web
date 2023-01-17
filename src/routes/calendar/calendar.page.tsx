import CalendarDays from './components/calendar-days'
import CalendarHeader from './components/calendar-header'
import DatesRibbon from './components/dates-ribon/dates-ribon'

export function CalendarPage() {
  return (
    <div>
      <CalendarHeader />
      <CalendarDays />
      <DatesRibbon />
    </div>
  )
}

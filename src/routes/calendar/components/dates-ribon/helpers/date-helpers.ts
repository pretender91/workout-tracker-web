//addDays
export function addDays(date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

//startOfWeek
export function startOfWeek(date: Date) {
  const result = new Date(date)
  result.setDate(result.getDate() - result.getDay())
  return result
}

//addWeeks
export function addWeeks(date: Date, weeks: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + weeks * 7)
  return result
}

//subWeeks
export function subWeeks(date: Date, weeks: number) {
  const result = new Date(date)
  result.setDate(result.getDate() - weeks * 7)
  return result
}

export function getDateStrPresentation(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

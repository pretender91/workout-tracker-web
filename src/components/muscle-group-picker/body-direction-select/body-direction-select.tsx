import { Select } from '@mantine/core'
import { useMemo } from 'react'
import { BodyDirection } from '../useMuscleGroup'

function BodyDirectionSelect(props: {
  value: BodyDirection
  onChange: (value: BodyDirection) => void
}) {
  const options = useMemo(
    () =>
      Object.values(BodyDirection).map((direction) => ({
        value: direction,
        label: direction,
      })),
    [],
  )
  return (
    <Select
      label="Select body direction"
      placeholder="Pick one"
      data={options}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default BodyDirectionSelect

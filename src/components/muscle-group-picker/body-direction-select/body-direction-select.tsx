import { BodyDirection } from '../useMuscleGroup'

//TODO implement select for body direction

function BodyDirectionSelect(props: {
  value: BodyDirection
  onChange: (value: BodyDirection) => void
}) {
  return (
    <select
      onChange={(e) => props.onChange(e.currentTarget.value as BodyDirection)}
    >
      {Object.values(BodyDirection).map((direction) => (
        <option key={direction} value={direction}>
          {direction}
        </option>
      ))}
    </select>
  )
}

export default BodyDirectionSelect

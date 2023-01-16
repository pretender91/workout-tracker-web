import Select from '../../select/select'
import { BodyDirection } from '../useMuscleGroup'

function BodyDirectionSelect(props: {
  value: BodyDirection
  onChange: (value: BodyDirection) => void
}) {
  return (
    <Select
      options={[
        { value: BodyDirection.Front, name: 'Front' },
        { value: BodyDirection.Back, name: 'Back' },
      ]}
      onChange={props.onChange}
    />
  )
}

export default BodyDirectionSelect

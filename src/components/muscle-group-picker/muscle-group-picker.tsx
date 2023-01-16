import BackBodyMuscles from './back-body/back-body'
import BodyDirectionSelect from './body-direction-select/body-direction-select'
import FrontBodyMuscles from './front-body/front-body'
import './muscle-group-picker.css'
import useMuscleGroup, { BodyDirection } from './useMuscleGroup'
function MuscleGroupPicker() {
  const {
    bodyDirection,
    handleBodyDirectionChange,
    handleDataChange,
    isDataItemActive,
  } = useMuscleGroup()
  return (
    <div>
      <BodyDirectionSelect
        value={bodyDirection}
        onChange={handleBodyDirectionChange}
      />

      <div className="body-map" id="body-map">
        <div
          id="male-body-maps"
          className="body-map__container"
          style={{ display: 'flex' }}
        >
          {bodyDirection === BodyDirection.Front && (
            <FrontBodyMuscles
              onChange={handleDataChange}
              isDataActive={isDataItemActive}
            />
          )}
          {bodyDirection === BodyDirection.Back && (
            <BackBodyMuscles
              onChange={handleDataChange}
              isDataActive={isDataItemActive}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MuscleGroupPicker

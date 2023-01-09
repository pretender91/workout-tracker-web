import { useState } from 'react'

export enum BodyDirection {
  Front = 'Front',
  Back = 'Back',
}

export enum MuscleGroup {
  Abdominals = 'abdominals',
  Obliques = 'obliques',
  Forearms = 'forearms',
  Biceps = 'biceps',
  Shoulders = 'shoulders',
  Traps = 'traps',
  Chest = 'chest',
  Quads = 'quads',
  Hamstrings = 'hamstrings',
  Lowerback = 'lowerback',
  Glutes = 'glutes',
  Lats = 'lats',
  Traps_Middle = 'traps_middle',
  Calves = 'calves',
  Triceps = 'triceps',
}

export type MuscleItem = {
  name: MuscleGroup
  selected: boolean
}
function createNewData(): Map<MuscleGroup, MuscleItem> {
  const values = Object.values(MuscleGroup)

  const newData = new Map()
  values.map((item) => {
    newData.set(item, { name: item, selected: false })
  })
  return newData
}

function useMuscleGroup() {
  const [data, setData] = useState<Map<MuscleGroup, MuscleItem>>(
    createNewData(),
  )
  const [bodyDirection, setBodyDirection] = useState<BodyDirection>(
    BodyDirection.Front,
  )

  function isDataItemActive(key: MuscleGroup) {
    const item = data.get(key)

    if (!item) {
      return false
    }

    return item.selected
  }

  function handleDataChange(name: MuscleGroup) {
    const item = data.get(name)
    if (item) {
      const newMap = new Map([
        ...data,
        [name, { ...item, selected: !item?.selected }],
      ])
      setData(newMap)
    } else {
      const newData = new Map([...data, [name, { name, selected: true }]])
      setData(newData)
    }
  }

  const handleBodyDirectionChange = (newBodyDirection: BodyDirection) => {
    setBodyDirection(newBodyDirection)
  }

  return {
    data: data ? Array.from(data.values()) : [],
    bodyDirection,
    handleDataChange,
    handleBodyDirectionChange,
    isDataItemActive,
  }
}

export default useMuscleGroup

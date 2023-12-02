export default function entitiesToOptions(entities = [], options) {
  return entities?.map((entity) => entityToOption(entity, options)) || []
}

export function entityToOption(entity, { fieldValue = 'id', fieldLabel = 'name' } = {}) {
  return {
    name: entity[fieldLabel] || entity.name,
    value: entity[fieldValue] !== undefined ? entity[fieldValue] : entity.value,
  }
}

import entitiesToOptions from 'utils/entityToOptions'
// import useFetchCategories from 'features/Categories/hooks/useFetchCategories'

const HOOKS_MAP = {
  // categories: useFetchCategories,
}

const FIELD_LABEL = {
  // categories: 'name',
}

export default function useGetOptions(resourceNameList, filters) {
  const options = {}

  resourceNameList.forEach((resourceName) => {
    const resourceFetchHook = HOOKS_MAP[resourceName]
    const hookData = resourceFetchHook?.(filters)
    const resourceList = hookData?.[resourceName] || []

    options[`${resourceName}Options`] = entitiesToOptions(resourceList, {
      fieldLabel: FIELD_LABEL[resourceName],
    })
  })

  return options
}

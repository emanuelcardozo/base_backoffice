import useFetchStores from 'features/Stores/hooks/useFetchStores'
import entitiesToOptions from 'utils/entityToOptions'
import useFetchMalls from 'features/Malls/hooks/useFetchMalls.js'
import useGetWeekdays from 'features/Discounts/hooks/useGetWeekDays'
import useFetchPublicationTypes from 'features/Publications/hooks/useFetchPublicationTypes'
import useFetchPublications from 'features/Publications/hooks/useFetchPublications'
import useFetchCategories from 'features/Categories/hooks/useFetchCategories'
import useFetchCustomers from 'features/Customers/hooks/useFetchCustomers'
import useFetchDiscounts from 'features/Discounts/hooks/useFetchDiscounts'
import useGetPromotionTypes from 'features/Discounts/hooks/useGetPromotionTypes'

const HOOKS_MAP = {
  stores: useFetchStores,
  malls: useFetchMalls,
  weekDays: useGetWeekdays,
  publicationTypes: useFetchPublicationTypes,
  publications: useFetchPublications,
  categories: useFetchCategories,
  customers: useFetchCustomers,
  discounts: useFetchDiscounts,
  promotionTypes: useGetPromotionTypes,
}

const FIELD_LABEL = {
  stores: 'name',
  malls: 'name',
  weekDays: 'name',
  publicationTypes: 'name',
  publications: 'title',
  categories: 'name',
  customers: 'email',
  discounts: 'name',
  promotionTypes: 'name',
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

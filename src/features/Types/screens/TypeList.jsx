import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchCategories from '../hooks/useFetchTypes'
import CategoriesTable from '../components/TypesTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteCategory from '../hooks/useDeleteType'
// import CategoriesFilters from '../components/CategoriesFilters'

const CategoriesList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Categories' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { categories, paginator, loading, refresh } = useFetchCategories(filters)
  const { onRemove } = useDeleteCategory(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.name'), fieldName: 'name', sortable: true },
      { header: t('fields.active'), fieldName: 'active', sortable: true },
      { header: t('fields.createdAt'), fieldName: 'createdAt', sortable: true },
    ],
    [t]
  )

  const handleClickAdd = useCallback(() => navigate(`create`), [navigate])
  const handleClickView = useCallback(({ id }) => navigate(`${id}`), [navigate])
  const handleClickEdit = useCallback(({ id }) => navigate(`${id}/edit`), [navigate])
  const handleClickDelete = useCallback(({ id }) => onRemove(id), [onRemove])

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <SectionHeader
          title={t('listing.title')}
          showAddButton
          onClickAddButton={handleClickAdd}
          // onClickFilterButton={openFilters}
          // filtersCount={count}
        />
        {/* <CategoriesFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <CategoriesTable
            columns={columns}
            rows={categories}
            loading={loading}
            onClickView={handleClickView}
            onClickEdit={handleClickEdit}
            onClickRemove={handleClickDelete}
            count={total}
            page={page}
            onPageChange={setPage}
            perPage={perPage}
            onRowsPerPageChange={setPerPage}
            onSort={console.log}
          />
        </Card>
      </Stack>
    </Container>
  )
}

export default CategoriesList

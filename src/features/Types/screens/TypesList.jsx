import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchTypes from '../hooks/useFetchTypes'
import TypesTable from '../components/TypesTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteType from '../hooks/useDeleteType'
// import TypesFilters from '../components/TypesFilters'

const TypeList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Types' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Types, paginator, loading, refresh } = useFetchTypes(filters)
  const { onRemove } = useDeleteType(refresh)
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
        {/* <TypesFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <TypesTable
            columns={columns}
            rows={Types}
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

export default TypeList

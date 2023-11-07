import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchLocales from '../hooks/useFetchLocales'
import LocalesTable from '../components/LocalesTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteLocal from '../hooks/useDeleteLocal'
// import LocalesFilters from '../components/LocalesFilters'

const LocalList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Locales' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Locales, paginator, loading, refresh } = useFetchLocales(filters)
  const { onRemove } = useDeleteLocal(refresh)
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
        {/* <LocalesFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <LocalesTable
            columns={columns}
            rows={ Locales }
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

export default LocalList

import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchHolas from '../hooks/useFetchHolas'
import HolasTable from '../components/HolasTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteHola from '../hooks/useDeleteHola'
// import HolasFilters from '../components/HolasFilters'

const HolaList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Holas' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Holas, paginator, loading, refresh } = useFetchHolas(filters)
  const { onRemove } = useDeleteHola(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.date'), fieldName: 'date', sortable: true },

      { header: t('fields.time'), fieldName: 'time', sortable: true },

      { header: t('fields.datetime'), fieldName: 'datetime', sortable: true },

      { header: t('fields.array'), fieldName: 'array', sortable: true },
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
        {/* <HolasFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <HolasTable
            columns={columns}
            rows={Holas}
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

export default HolaList

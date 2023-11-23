import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchRpuebas33 from '../hooks/useFetchRpuebas33'
import Rpuebas33Table from '../components/Rpuebas33Table'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeletePruebas2 from '../hooks/useDeletePruebas2'
// import Rpuebas33Filters from '../components/Rpuebas33Filters'

const Pruebas2List = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Rpuebas33' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Rpuebas33, paginator, loading, refresh } = useFetchRpuebas33(filters)
  const { onRemove } = useDeletePruebas2(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.date'), fieldName: 'date', sortable: true },

      { header: t('fields.datetime'), fieldName: 'datetime', sortable: true },

      { header: t('fields.time'), fieldName: 'time', sortable: true },

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
        {/* <Rpuebas33Filters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <Rpuebas33Table
            columns={columns}
            rows={Rpuebas33}
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

export default Pruebas2List

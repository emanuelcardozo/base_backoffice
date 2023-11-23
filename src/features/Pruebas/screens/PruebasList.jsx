import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchPruebas from '../hooks/useFetchPruebas'
import PruebasTable from '../components/PruebasTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeletePrueba from '../hooks/useDeletePrueba'
// import PruebasFilters from '../components/PruebasFilters'

const PruebaList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Pruebas' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Pruebas, paginator, loading, refresh } = useFetchPruebas(filters)
  const { onRemove } = useDeletePrueba(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.string'), fieldName: 'string', sortable: true },

      { header: t('fields.date'), fieldName: 'date', sortable: true },

      { header: t('fields.time'), fieldName: 'time', sortable: true },

      { header: t('fields.datetime'), fieldName: 'datetime', sortable: true },

      { header: t('fields.array'), fieldName: 'array', sortable: true },

      { header: t('fields.number'), fieldName: 'number', sortable: true },
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
        {/* <PruebasFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <PruebasTable
            columns={columns}
            rows={Pruebas}
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

export default PruebaList

import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchMonedas from '../hooks/useFetchMonedas'
import MonedasTable from '../components/MonedasTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteMoneda from '../hooks/useDeleteMoneda'
// import MonedasFilters from '../components/MonedasFilters'

const MonedaList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Monedas' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Monedas, paginator, loading, refresh } = useFetchMonedas(filters)
  const { onRemove } = useDeleteMoneda(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      
      { header: t('fields.tamano'), fieldName: 'tamano', sortable: true },
      
      { header: t('fields.detalle'), fieldName: 'detalle', sortable: true },
      
      { header: t('fields.existe'), fieldName: 'existe', sortable: true },
      
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
        {/* <MonedasFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <MonedasTable
            columns={columns}
            rows={ Monedas }
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

export default MonedaList

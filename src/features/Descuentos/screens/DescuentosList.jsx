import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchDescuentos from '../hooks/useFetchDescuentos'
import DescuentosTable from '../components/DescuentosTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteDescuento from '../hooks/useDeleteDescuento'
// import DescuentosFilters from '../components/DescuentosFilters'

const DescuentoList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Descuentos' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Descuentos, paginator, loading, refresh } = useFetchDescuentos(filters)
  const { onRemove } = useDeleteDescuento(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      
      { header: t('fields.id'), fieldName: 'id', sortable: true },
      
      { header: t('fields.detalle'), fieldName: 'detalle', sortable: true },
      
      { header: t('fields.activo'), fieldName: 'activo', sortable: true },
      
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
        {/* <DescuentosFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <DescuentosTable
            columns={columns}
            rows={ Descuentos }
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

export default DescuentoList

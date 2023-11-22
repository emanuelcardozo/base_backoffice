import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchModelos from '../hooks/useFetchModelos'
import ModelosTable from '../components/ModelosTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteModelo from '../hooks/useDeleteModelo'
// import ModelosFilters from '../components/ModelosFilters'

const ModeloList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Modelos' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Modelos, paginator, loading, refresh } = useFetchModelos(filters)
  const { onRemove } = useDeleteModelo(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      
      { header: t('fields.id'), fieldName: 'id', sortable: true },
      
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },
      
      { header: t('fields.fecha'), fieldName: 'fecha', sortable: true },
      
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
        {/* <ModelosFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <ModelosTable
            columns={columns}
            rows={ Modelos }
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

export default ModeloList

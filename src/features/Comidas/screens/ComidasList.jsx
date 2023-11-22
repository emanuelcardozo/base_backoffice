import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchComidas from '../hooks/useFetchComidas'
import ComidasTable from '../components/ComidasTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteComida from '../hooks/useDeleteComida'
// import ComidasFilters from '../components/ComidasFilters'

const ComidaList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Comidas' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Comidas, paginator, loading, refresh } = useFetchComidas(filters)
  const { onRemove } = useDeleteComida(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },

      { header: t('fields.fecha'), fieldName: 'fecha', sortable: true },

      { header: t('fields.dia'), fieldName: 'dia', sortable: true },
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
        {/* <ComidasFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <ComidasTable
            columns={columns}
            rows={Comidas}
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

export default ComidaList

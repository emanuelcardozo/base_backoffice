import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchJauria from '../hooks/useFetchJauria'
import JauriaTable from '../components/JauriaTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeletePerro from '../hooks/useDeletePerro'
// import JauriaFilters from '../components/JauriaFilters'

const PerroList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Jauria' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Jauria, paginator, loading, refresh } = useFetchJauria(filters)
  const { onRemove } = useDeletePerro(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },

      { header: t('fields.fecha'), fieldName: 'fecha', sortable: true },

      { header: t('fields.id'), fieldName: 'id', sortable: true },

      { header: t('fields.lindo'), fieldName: 'lindo', sortable: true },

      { header: t('fields.gustos'), fieldName: 'gustos', sortable: true },
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
        {/* <JauriaFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <JauriaTable
            columns={columns}
            rows={Jauria}
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

export default PerroList

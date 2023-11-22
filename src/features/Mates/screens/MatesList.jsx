import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchMates from '../hooks/useFetchMates'
import MatesTable from '../components/MatesTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteMate from '../hooks/useDeleteMate'
// import MatesFilters from '../components/MatesFilters'

const MateList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Mates' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Mates, paginator, loading, refresh } = useFetchMates(filters)
  const { onRemove } = useDeleteMate(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      
      { header: t('fields.tamano'), fieldName: 'tamano', sortable: true },
      
      { header: t('fields.nombre2'), fieldName: 'nombre2', sortable: true },
      
      { header: t('fields.caro'), fieldName: 'caro', sortable: true },
      
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
        {/* <MatesFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <MatesTable
            columns={columns}
            rows={ Mates }
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

export default MateList

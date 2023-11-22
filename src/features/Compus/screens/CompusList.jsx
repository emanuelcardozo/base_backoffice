import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchCompus from '../hooks/useFetchCompus'
import CompusTable from '../components/CompusTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteCompu from '../hooks/useDeleteCompu'
// import CompusFilters from '../components/CompusFilters'

const CompuList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Compus' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Compus, paginator, loading, refresh } = useFetchCompus(filters)
  const { onRemove } = useDeleteCompu(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },

      { header: t('fields.marca'), fieldName: 'marca', sortable: true },

      { header: t('fields.id'), fieldName: 'id', sortable: true },

      { header: t('fields.linda'), fieldName: 'linda', sortable: true },
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
        {/* <CompusFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <CompusTable
            columns={columns}
            rows={Compus}
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

export default CompuList

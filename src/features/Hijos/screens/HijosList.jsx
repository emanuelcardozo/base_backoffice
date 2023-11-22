import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchHijos from '../hooks/useFetchHijos'
import HijosTable from '../components/HijosTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteHijo from '../hooks/useDeleteHijo'
// import HijosFilters from '../components/HijosFilters'

const HijoList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Hijos' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Hijos, paginator, loading, refresh } = useFetchHijos(filters)
  const { onRemove } = useDeleteHijo(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },

      { header: t('fields.edad'), fieldName: 'edad', sortable: true },

      { header: t('fields.fecha_nacimiento'), fieldName: 'fecha_nacimiento', sortable: true },
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
        {/* <HijosFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <HijosTable
            columns={columns}
            rows={Hijos}
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

export default HijoList

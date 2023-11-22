import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchAnimalazos from '../hooks/useFetchAnimalazos'
import AnimalazosTable from '../components/AnimalazosTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteAnimales from '../hooks/useDeleteAnimales'
// import AnimalazosFilters from '../components/AnimalazosFilters'

const AnimalesList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Animalazos' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Animalazos, paginator, loading, refresh } = useFetchAnimalazos(filters)
  const { onRemove } = useDeleteAnimales(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },

      { header: t('fields.edad'), fieldName: 'edad', sortable: true },

      { header: t('fields.macho'), fieldName: 'macho', sortable: true },
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
        {/* <AnimalazosFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <AnimalazosTable
            columns={columns}
            rows={Animalazos}
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

export default AnimalesList

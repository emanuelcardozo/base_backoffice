import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchPokemones from '../hooks/useFetchPokemones'
import PokemonesTable from '../components/PokemonesTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeletePokemon from '../hooks/useDeletePokemon'
// import PokemonesFilters from '../components/PokemonesFilters'

const PokemonList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Pokemones' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Pokemones, paginator, loading, refresh } = useFetchPokemones(filters)
  const { onRemove } = useDeletePokemon(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },

      { header: t('fields.edad'), fieldName: 'edad', sortable: true },

      { header: t('fields.adulto'), fieldName: 'adulto', sortable: true },
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
        {/* <PokemonesFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <PokemonesTable
            columns={columns}
            rows={Pokemones}
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

export default PokemonList

import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchAmigos from '../hooks/useFetchAmigos'
import AmigosTable from '../components/AmigosTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteAmigo from '../hooks/useDeleteAmigo'
// import AmigosFilters from '../components/AmigosFilters'

const AmigoList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Amigos' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Amigos, paginator, loading, refresh } = useFetchAmigos(filters)
  const { onRemove } = useDeleteAmigo(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      
      { header: t('fields.nombre'), fieldName: 'nombre', sortable: true },
      
      { header: t('fields.edad'), fieldName: 'edad', sortable: true },
      
      { header: t('fields.mejorAmigo'), fieldName: 'mejorAmigo', sortable: true },
      
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
        {/* <AmigosFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <AmigosTable
            columns={columns}
            rows={ Amigos }
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

export default AmigoList

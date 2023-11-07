import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetch{{cookiecutter.resource_name}} from '../hooks/useFetch{{cookiecutter.resource_name}}'
import {{cookiecutter.resource_name}}Table from '../components/{{cookiecutter.resource_name}}Table'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDelete{{cookiecutter.resource_name_singular}} from '../hooks/useDelete{{cookiecutter.resource_name_singular}}'
// import {{cookiecutter.resource_name}}Filters from '../components/{{cookiecutter.resource_name}}Filters'

const {{cookiecutter.resource_name_singular}}List = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: '{{cookiecutter.resource_name}}' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { {{cookiecutter.resource_name}}, paginator, loading, refresh } = useFetch{{cookiecutter.resource_name}}(filters)
  const { onRemove } = useDelete{{cookiecutter.resource_name_singular}}(refresh)
  const { total, page, setPage, perPage, setPerPage } = paginator

  const columns = useMemo(
    () => [
      { header: t('fields.name'), fieldName: 'name', sortable: true },
      { header: t('fields.active'), fieldName: 'active', sortable: true },
      { header: t('fields.createdAt'), fieldName: 'createdAt', sortable: true },
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
        {/* <{{cookiecutter.resource_name}}Filters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <{{cookiecutter.resource_name}}Table
            columns={columns}
            rows={ {{cookiecutter.resource_name}} }
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

export default {{cookiecutter.resource_name_singular}}List

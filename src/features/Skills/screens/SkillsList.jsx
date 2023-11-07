import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Container, Stack } from '@mui/material'
import SectionHeader from 'components/SectionHeader'
import useFetchSkills from '../hooks/useFetchSkills'
import SkillsTable from '../components/SkillsTable'
import { useNavigate } from 'react-router-dom'
import useFilters from 'hooks/useFilters.js'
import useDeleteSkill from '../hooks/useDeleteSkill'
// import SkillsFilters from '../components/SkillsFilters'

const SkillList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('features', { keyPrefix: 'Skills' })
  // const { isOpenFilters, openFilters, onCancel, onApply, count, filters } = useFilters()
  const { filters } = useFilters()
  const { Skills, paginator, loading, refresh } = useFetchSkills(filters)
  const { onRemove } = useDeleteSkill(refresh)
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
        {/* <SkillsFilters open={isOpenFilters} onCancel={onCancel} onApply={onApply} /> */}
        <Card>
          <SkillsTable
            columns={columns}
            rows={Skills}
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

export default SkillList

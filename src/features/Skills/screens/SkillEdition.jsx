import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import SkillForm from '../components/SkillForm'
import useSkillEdition from '../hooks/useSkillEdition'
import { useParams } from 'react-router-dom'
import useFetchSkillDetail from '../hooks/useFetchSkillDetail'
import { editionSkillFromAPI } from '../transformers'
import useSkillFormCancelDialog from '../hooks/useSkillFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function SkillEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Skills' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useSkillFormCancelDialog({ mode: 'edit' })
  const { Skill, loading } = useFetchSkillDetail(id, editionSkillFromAPI)
  const { onSubmit, loading: isSubmitting } = useSkillEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Skills" />
        <Stack
          direction={direction}
          justifyContent="space-between"
          spacing={4}
          alignItems="flex-start"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <SkillForm
          onSubmit={onSubmit}
          initialValues={(Skill)}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

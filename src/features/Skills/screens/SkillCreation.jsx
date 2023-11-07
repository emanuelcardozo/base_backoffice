import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import SkillForm from '../components/Skill'
import useSkillFormCancelDialog from '../hooks/useSkillFormCancelDialog'
import useSkillCreation from '../hooks/useSkillCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function SkillCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Skills' })
  const { onClickOpenConfirm } = useSkillFormCancelDialog()
  const { onSubmit, loading } = useSkillCreation()

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
          <Stack direction="row" spacing={2} sx={style}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <SkillForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

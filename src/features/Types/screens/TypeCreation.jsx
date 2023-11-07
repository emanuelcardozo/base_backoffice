import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import TypeForm from '../components/Type'
import useTypeFormCancelDialog from '../hooks/useTypeFormCancelDialog'
import useTypeCreation from '../hooks/useTypeCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function TypeCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Types' })
  const { onClickOpenConfirm } = useTypeFormCancelDialog()
  const { onSubmit, loading } = useTypeCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Types" />
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
        <TypeForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import LocalForm from '../components/Local'
import useLocalFormCancelDialog from '../hooks/useLocalFormCancelDialog'
import useLocalCreation from '../hooks/useLocalCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function LocalCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Locales' })
  const { onClickOpenConfirm } = useLocalFormCancelDialog()
  const { onSubmit, loading } = useLocalCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Locales" />
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
        <LocalForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

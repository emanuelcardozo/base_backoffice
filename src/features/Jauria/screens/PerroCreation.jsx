import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import PerroForm from '../components/PerroForm'
import usePerroFormCancelDialog from '../hooks/usePerroFormCancelDialog'
import usePerroCreation from '../hooks/usePerroCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function PerroCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Jauria' })
  const { onClickOpenConfirm } = usePerroFormCancelDialog()
  const { onSubmit, loading } = usePerroCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Jauria" />
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
        <PerroForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

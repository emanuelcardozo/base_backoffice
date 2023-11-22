import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import HijoForm from '../components/HijoForm'
import useHijoFormCancelDialog from '../hooks/useHijoFormCancelDialog'
import useHijoCreation from '../hooks/useHijoCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function HijoCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Hijos' })
  const { onClickOpenConfirm } = useHijoFormCancelDialog()
  const { onSubmit, loading } = useHijoCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Hijos" />
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
        <HijoForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

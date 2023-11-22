import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import MonedaForm from '../components/MonedaForm'
import useMonedaFormCancelDialog from '../hooks/useMonedaFormCancelDialog'
import useMonedaCreation from '../hooks/useMonedaCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function MonedaCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Monedas' })
  const { onClickOpenConfirm } = useMonedaFormCancelDialog()
  const { onSubmit, loading } = useMonedaCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Monedas" />
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
        <MonedaForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

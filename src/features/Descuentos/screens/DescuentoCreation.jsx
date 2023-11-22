import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import DescuentoForm from '../components/DescuentoForm'
import useDescuentoFormCancelDialog from '../hooks/useDescuentoFormCancelDialog'
import useDescuentoCreation from '../hooks/useDescuentoCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function DescuentoCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Descuentos' })
  const { onClickOpenConfirm } = useDescuentoFormCancelDialog()
  const { onSubmit, loading } = useDescuentoCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Descuentos" />
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
        <DescuentoForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

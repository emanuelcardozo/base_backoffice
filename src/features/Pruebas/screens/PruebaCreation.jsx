import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import PruebaForm from '../components/PruebaForm'
import usePruebaFormCancelDialog from '../hooks/usePruebaFormCancelDialog'
import usePruebaCreation from '../hooks/usePruebaCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function PruebaCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Pruebas' })
  const { onClickOpenConfirm } = usePruebaFormCancelDialog()
  const { onSubmit, loading } = usePruebaCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Pruebas" />
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
        <PruebaForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

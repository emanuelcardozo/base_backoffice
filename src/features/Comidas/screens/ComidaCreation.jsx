import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import ComidaForm from '../components/ComidaForm'
import useComidaFormCancelDialog from '../hooks/useComidaFormCancelDialog'
import useComidaCreation from '../hooks/useComidaCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function ComidaCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Comidas' })
  const { onClickOpenConfirm } = useComidaFormCancelDialog()
  const { onSubmit, loading } = useComidaCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Comidas" />
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
        <ComidaForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

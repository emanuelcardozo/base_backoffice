import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import ModeloForm from '../components/ModeloForm'
import useModeloFormCancelDialog from '../hooks/useModeloFormCancelDialog'
import useModeloCreation from '../hooks/useModeloCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function ModeloCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Modelos' })
  const { onClickOpenConfirm } = useModeloFormCancelDialog()
  const { onSubmit, loading } = useModeloCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Modelos" />
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
        <ModeloForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

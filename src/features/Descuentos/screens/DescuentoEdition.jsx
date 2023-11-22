import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import DescuentoForm from '../components/DescuentoForm'
import useDescuentoEdition from '../hooks/useDescuentoEdition'
import { useParams } from 'react-router-dom'
import useFetchDescuentoDetail from '../hooks/useFetchDescuentoDetail'
import { editionDescuentoFromAPI } from '../transformers'
import useDescuentoFormCancelDialog from '../hooks/useDescuentoFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function DescuentoEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Descuentos' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useDescuentoFormCancelDialog({ mode: 'edit' })
  const { Descuento, loading } = useFetchDescuentoDetail(id, editionDescuentoFromAPI)
  const { onSubmit, loading: isSubmitting } = useDescuentoEdition(id)

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
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <DescuentoForm
          onSubmit={onSubmit}
          initialValues={ Descuento }
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

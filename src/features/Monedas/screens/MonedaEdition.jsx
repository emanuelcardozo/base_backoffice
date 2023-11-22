import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import MonedaForm from '../components/MonedaForm'
import useMonedaEdition from '../hooks/useMonedaEdition'
import { useParams } from 'react-router-dom'
import useFetchMonedaDetail from '../hooks/useFetchMonedaDetail'
import { editionMonedaFromAPI } from '../transformers'
import useMonedaFormCancelDialog from '../hooks/useMonedaFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function MonedaEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Monedas' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useMonedaFormCancelDialog({ mode: 'edit' })
  const { Moneda, loading } = useFetchMonedaDetail(id, editionMonedaFromAPI)
  const { onSubmit, loading: isSubmitting } = useMonedaEdition(id)

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
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <MonedaForm
          onSubmit={onSubmit}
          initialValues={ Moneda }
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

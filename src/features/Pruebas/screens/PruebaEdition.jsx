import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import PruebaForm from '../components/PruebaForm'
import usePruebaEdition from '../hooks/usePruebaEdition'
import { useParams } from 'react-router-dom'
import useFetchPruebaDetail from '../hooks/useFetchPruebaDetail'
import { editionPruebaFromAPI } from '../transformers'
import usePruebaFormCancelDialog from '../hooks/usePruebaFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function PruebaEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Pruebas' })
  const { id } = useParams()
  const { onClickOpenConfirm } = usePruebaFormCancelDialog({ mode: 'edit' })
  const { Prueba, loading } = useFetchPruebaDetail(id, editionPruebaFromAPI)
  const { onSubmit, loading: isSubmitting } = usePruebaEdition(id)

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
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <PruebaForm
          onSubmit={onSubmit}
          initialValues={Prueba}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import ModeloForm from '../components/ModeloForm'
import useModeloEdition from '../hooks/useModeloEdition'
import { useParams } from 'react-router-dom'
import useFetchModeloDetail from '../hooks/useFetchModeloDetail'
import { editionModeloFromAPI } from '../transformers'
import useModeloFormCancelDialog from '../hooks/useModeloFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function ModeloEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Modelos' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useModeloFormCancelDialog({ mode: 'edit' })
  const { Modelo, loading } = useFetchModeloDetail(id, editionModeloFromAPI)
  const { onSubmit, loading: isSubmitting } = useModeloEdition(id)

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
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <ModeloForm
          onSubmit={onSubmit}
          initialValues={ Modelo }
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

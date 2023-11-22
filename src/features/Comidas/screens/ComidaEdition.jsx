import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import ComidaForm from '../components/ComidaForm'
import useComidaEdition from '../hooks/useComidaEdition'
import { useParams } from 'react-router-dom'
import useFetchComidaDetail from '../hooks/useFetchComidaDetail'
import { editionComidaFromAPI } from '../transformers'
import useComidaFormCancelDialog from '../hooks/useComidaFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function ComidaEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Comidas' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useComidaFormCancelDialog({ mode: 'edit' })
  const { Comida, loading } = useFetchComidaDetail(id, editionComidaFromAPI)
  const { onSubmit, loading: isSubmitting } = useComidaEdition(id)

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
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <ComidaForm
          onSubmit={onSubmit}
          initialValues={Comida}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

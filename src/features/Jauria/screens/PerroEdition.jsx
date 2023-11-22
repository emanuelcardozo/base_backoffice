import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import PerroForm from '../components/PerroForm'
import usePerroEdition from '../hooks/usePerroEdition'
import { useParams } from 'react-router-dom'
import useFetchPerroDetail from '../hooks/useFetchPerroDetail'
import { editionPerroFromAPI } from '../transformers'
import usePerroFormCancelDialog from '../hooks/usePerroFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function PerroEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Jauria' })
  const { id } = useParams()
  const { onClickOpenConfirm } = usePerroFormCancelDialog({ mode: 'edit' })
  const { Perro, loading } = useFetchPerroDetail(id, editionPerroFromAPI)
  const { onSubmit, loading: isSubmitting } = usePerroEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Jauria" />
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
        <PerroForm
          onSubmit={onSubmit}
          initialValues={Perro}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

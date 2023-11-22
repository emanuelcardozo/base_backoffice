import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import AmigoForm from '../components/AmigoForm'
import useAmigoEdition from '../hooks/useAmigoEdition'
import { useParams } from 'react-router-dom'
import useFetchAmigoDetail from '../hooks/useFetchAmigoDetail'
import { editionAmigoFromAPI } from '../transformers'
import useAmigoFormCancelDialog from '../hooks/useAmigoFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function AmigoEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Amigos' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useAmigoFormCancelDialog({ mode: 'edit' })
  const { Amigo, loading } = useFetchAmigoDetail(id, editionAmigoFromAPI)
  const { onSubmit, loading: isSubmitting } = useAmigoEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Amigos" />
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
        <AmigoForm
          onSubmit={onSubmit}
          initialValues={ Amigo }
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

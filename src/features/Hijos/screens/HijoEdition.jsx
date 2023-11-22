import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import HijoForm from '../components/HijoForm'
import useHijoEdition from '../hooks/useHijoEdition'
import { useParams } from 'react-router-dom'
import useFetchHijoDetail from '../hooks/useFetchHijoDetail'
import { editionHijoFromAPI } from '../transformers'
import useHijoFormCancelDialog from '../hooks/useHijoFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function HijoEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Hijos' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useHijoFormCancelDialog({ mode: 'edit' })
  const { Hijo, loading } = useFetchHijoDetail(id, editionHijoFromAPI)
  const { onSubmit, loading: isSubmitting } = useHijoEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Hijos" />
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
        <HijoForm
          onSubmit={onSubmit}
          initialValues={Hijo}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

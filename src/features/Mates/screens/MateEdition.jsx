import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import MateForm from '../components/MateForm'
import useMateEdition from '../hooks/useMateEdition'
import { useParams } from 'react-router-dom'
import useFetchMateDetail from '../hooks/useFetchMateDetail'
import { editionMateFromAPI } from '../transformers'
import useMateFormCancelDialog from '../hooks/useMateFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function MateEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Mates' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useMateFormCancelDialog({ mode: 'edit' })
  const { Mate, loading } = useFetchMateDetail(id, editionMateFromAPI)
  const { onSubmit, loading: isSubmitting } = useMateEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Mates" />
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
        <MateForm
          onSubmit={onSubmit}
          initialValues={ Mate }
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

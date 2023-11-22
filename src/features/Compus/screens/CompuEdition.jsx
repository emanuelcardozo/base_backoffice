import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import CompuForm from '../components/CompuForm'
import useCompuEdition from '../hooks/useCompuEdition'
import { useParams } from 'react-router-dom'
import useFetchCompuDetail from '../hooks/useFetchCompuDetail'
import { editionCompuFromAPI } from '../transformers'
import useCompuFormCancelDialog from '../hooks/useCompuFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function CompuEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Compus' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useCompuFormCancelDialog({ mode: 'edit' })
  const { Compu, loading } = useFetchCompuDetail(id, editionCompuFromAPI)
  const { onSubmit, loading: isSubmitting } = useCompuEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Compus" />
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
        <CompuForm
          onSubmit={onSubmit}
          initialValues={Compu}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

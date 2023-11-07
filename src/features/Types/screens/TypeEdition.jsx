import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import TypeForm from '../components/TypeForm'
import useTypeEdition from '../hooks/useTypeEdition'
import { useParams } from 'react-router-dom'
import useFetchTypeDetail from '../hooks/useFetchTypeDetail'
import { editionTypeFromAPI } from '../transformers'
import useTypeFormCancelDialog from '../hooks/useTypeFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function TypeEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Types' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useTypeFormCancelDialog({ mode: 'edit' })
  const { Type, loading } = useFetchTypeDetail(id, editionTypeFromAPI)
  const { onSubmit, loading: isSubmitting } = useTypeEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Types" />
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
        <TypeForm
          onSubmit={onSubmit}
          initialValues={(Type)}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

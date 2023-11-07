import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import LocalForm from '../components/LocalForm'
import useLocalEdition from '../hooks/useLocalEdition'
import { useParams } from 'react-router-dom'
import useFetchLocalDetail from '../hooks/useFetchLocalDetail'
import { editionLocalFromAPI } from '../transformers'
import useLocalFormCancelDialog from '../hooks/useLocalFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function LocalEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Locales' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useLocalFormCancelDialog({ mode: 'edit' })
  const { Local, loading } = useFetchLocalDetail(id, editionLocalFromAPI)
  const { onSubmit, loading: isSubmitting } = useLocalEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Locales" />
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
        <LocalForm
          onSubmit={onSubmit}
          initialValues={(Local)}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import HolaForm from '../components/HolaForm'
import useHolaEdition from '../hooks/useHolaEdition'
import { useParams } from 'react-router-dom'
import useFetchHolaDetail from '../hooks/useFetchHolaDetail'
import { editionHolaFromAPI } from '../transformers'
import useHolaFormCancelDialog from '../hooks/useHolaFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function HolaEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Holas' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useHolaFormCancelDialog({ mode: 'edit' })
  const { Hola, loading } = useFetchHolaDetail(id, editionHolaFromAPI)
  const { onSubmit, loading: isSubmitting } = useHolaEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Holas" />
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
        <HolaForm
          onSubmit={onSubmit}
          initialValues={Hola}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

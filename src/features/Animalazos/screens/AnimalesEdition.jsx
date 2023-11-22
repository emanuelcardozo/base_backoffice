import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import AnimalesForm from '../components/AnimalesForm'
import useAnimalesEdition from '../hooks/useAnimalesEdition'
import { useParams } from 'react-router-dom'
import useFetchAnimalesDetail from '../hooks/useFetchAnimalesDetail'
import { editionAnimalesFromAPI } from '../transformers'
import useAnimalesFormCancelDialog from '../hooks/useAnimalesFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function AnimalesEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Animalazos' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useAnimalesFormCancelDialog({ mode: 'edit' })
  const { Animales, loading } = useFetchAnimalesDetail(id, editionAnimalesFromAPI)
  const { onSubmit, loading: isSubmitting } = useAnimalesEdition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Animalazos" />
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
        <AnimalesForm
          onSubmit={onSubmit}
          initialValues={Animales}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

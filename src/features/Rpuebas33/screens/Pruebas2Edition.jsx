import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import Pruebas2Form from '../components/Pruebas2Form'
import usePruebas2Edition from '../hooks/usePruebas2Edition'
import { useParams } from 'react-router-dom'
import useFetchPruebas2Detail from '../hooks/useFetchPruebas2Detail'
import { editionPruebas2FromAPI } from '../transformers'
import usePruebas2FormCancelDialog from '../hooks/usePruebas2FormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function Pruebas2Edition() {
  const { t } = useTranslation('features', { keyPrefix: 'Rpuebas33' })
  const { id } = useParams()
  const { onClickOpenConfirm } = usePruebas2FormCancelDialog({ mode: 'edit' })
  const { Pruebas2, loading } = useFetchPruebas2Detail(id, editionPruebas2FromAPI)
  const { onSubmit, loading: isSubmitting } = usePruebas2Edition(id)

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Rpuebas33" />
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
        <Pruebas2Form
          onSubmit={onSubmit}
          initialValues={Pruebas2}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

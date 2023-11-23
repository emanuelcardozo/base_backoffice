import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import Pruebas2Form from '../components/Pruebas2Form'
import usePruebas2FormCancelDialog from '../hooks/usePruebas2FormCancelDialog'
import usePruebas2Creation from '../hooks/usePruebas2Creation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function Pruebas2Creation() {
  const { t } = useTranslation('features', { keyPrefix: 'Rpuebas33' })
  const { onClickOpenConfirm } = usePruebas2FormCancelDialog()
  const { onSubmit, loading } = usePruebas2Creation()

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
          <Stack direction="row" spacing={2} sx={style}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <Pruebas2Form onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

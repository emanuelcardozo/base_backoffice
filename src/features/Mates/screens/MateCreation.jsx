import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import MateForm from '../components/MateForm'
import useMateFormCancelDialog from '../hooks/useMateFormCancelDialog'
import useMateCreation from '../hooks/useMateCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function MateCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Mates' })
  const { onClickOpenConfirm } = useMateFormCancelDialog()
  const { onSubmit, loading } = useMateCreation()

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
          <Stack direction="row" spacing={2} sx={style}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <MateForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

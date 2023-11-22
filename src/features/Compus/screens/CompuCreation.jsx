import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import CompuForm from '../components/CompuForm'
import useCompuFormCancelDialog from '../hooks/useCompuFormCancelDialog'
import useCompuCreation from '../hooks/useCompuCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function CompuCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Compus' })
  const { onClickOpenConfirm } = useCompuFormCancelDialog()
  const { onSubmit, loading } = useCompuCreation()

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
          <Stack direction="row" spacing={2} sx={style}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <CompuForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

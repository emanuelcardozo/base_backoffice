import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import HolaForm from '../components/HolaForm'
import useHolaFormCancelDialog from '../hooks/useHolaFormCancelDialog'
import useHolaCreation from '../hooks/useHolaCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function HolaCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Holas' })
  const { onClickOpenConfirm } = useHolaFormCancelDialog()
  const { onSubmit, loading } = useHolaCreation()

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
          <Stack direction="row" spacing={2} sx={style}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <HolaForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

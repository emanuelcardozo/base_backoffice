import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import AmigoForm from '../components/AmigoForm'
import useAmigoFormCancelDialog from '../hooks/useAmigoFormCancelDialog'
import useAmigoCreation from '../hooks/useAmigoCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function AmigoCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Amigos' })
  const { onClickOpenConfirm } = useAmigoFormCancelDialog()
  const { onSubmit, loading } = useAmigoCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Amigos" />
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
        <AmigoForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import AnimalesForm from '../components/AnimalesForm'
import useAnimalesFormCancelDialog from '../hooks/useAnimalesFormCancelDialog'
import useAnimalesCreation from '../hooks/useAnimalesCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function AnimalesCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Animalazos' })
  const { onClickOpenConfirm } = useAnimalesFormCancelDialog()
  const { onSubmit, loading } = useAnimalesCreation()

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
          <Stack direction="row" spacing={2} sx={style}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <AnimalesForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

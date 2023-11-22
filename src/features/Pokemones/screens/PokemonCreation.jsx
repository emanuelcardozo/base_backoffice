import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import PokemonForm from '../components/PokemonForm'
import usePokemonFormCancelDialog from '../hooks/usePokemonFormCancelDialog'
import usePokemonCreation from '../hooks/usePokemonCreation'

const direction = { md: 'row', xs: 'column' }
const style = { alignItems: 'center' }

export default function PokemonCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Pokemones' })
  const { onClickOpenConfirm } = usePokemonFormCancelDialog()
  const { onSubmit, loading } = usePokemonCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/Pokemones" />
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
        <PokemonForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

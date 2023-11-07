import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import PokemonForm from '../components/PokemonForm'
import usePokemonEdition from '../hooks/usePokemonEdition'
import { useParams } from 'react-router-dom'
import useFetchPokemonDetail from '../hooks/useFetchPokemonDetail'
import { editionPokemonFromAPI } from '../transformers'
import usePokemonFormCancelDialog from '../hooks/usePokemonFormCancelDialog'

const direction = { md: 'row', xs: 'column' }

export default function PokemonEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Pokemones' })
  const { id } = useParams()
  const { onClickOpenConfirm } = usePokemonFormCancelDialog({ mode: 'edit' })
  const { Pokemon, loading } = useFetchPokemonDetail(id, editionPokemonFromAPI)
  const { onSubmit, loading: isSubmitting } = usePokemonEdition(id)

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
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <PokemonForm
          onSubmit={onSubmit}
          initialValues={(Pokemon)}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

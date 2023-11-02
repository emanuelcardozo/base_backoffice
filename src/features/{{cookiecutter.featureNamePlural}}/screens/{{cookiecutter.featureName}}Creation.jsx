import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import CategoryForm from '../components/{{cookiecutter.featureNamePlural}}Form'
import useCategoryFormCancelDialog from '../hooks/use{{cookiecutter.featureName}}FormCancelDialog'
import useCategoryCreation from '../hooks/use{{cookiecutter.featureName}}Creation'

export default function CategoryCreation() {
  const { t } = useTranslation('features', { keyPrefix: 'Categories' })
  const { onClickOpenConfirm } = useCategoryFormCancelDialog()
  const { onSubmit, loading } = useCategoryCreation()

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <SectionBackButton label={t('listing.title')} to="/categories" />
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
          spacing={4}
          alignItems="flex-start"
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Typography variant="h4">{t('create.title')}</Typography>
          </Stack>
        </Stack>
        <CategoryForm onSubmit={onSubmit} isSubmitting={loading} onCancel={onClickOpenConfirm} />
      </Stack>
    </Container>
  )
}

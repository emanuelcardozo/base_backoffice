import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SectionBackButton from 'components/SectionBackButton'
import CategoryForm from '../components/{{cookiecutter.featureNamePlural}}Form'
import useCategoryEdition from '../hooks/use{{cookiecutter.featureName}}Edition'
import { useParams } from 'react-router-dom'
import useFetchCategoryDetail from '../hooks/use{{cookiecutter.featureName}}Detail'
import { editionCategoryFromAPI } from '../transformers'
import useCategoryFormCancelDialog from '../hooks/use{{cookiecutter.featureName}}FormCancelDialog'

export default function CategoryEdition() {
  const { t } = useTranslation('features', { keyPrefix: 'Categories' })
  const { id } = useParams()
  const { onClickOpenConfirm } = useCategoryFormCancelDialog({ mode: 'edit' })
  const { category, loading } = useFetchCategoryDetail(id, editionCategoryFromAPI)
  const { onSubmit, loading: isSubmitting } = useCategoryEdition(id)

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
            <Typography variant="h4">{t('edit.title')}</Typography>
          </Stack>
        </Stack>
        <CategoryForm
          onSubmit={onSubmit}
          initialValues={category}
          mode="edit"
          isLoading={loading}
          isSubmitting={isSubmitting}
          onCancel={onClickOpenConfirm}
        />
      </Stack>
    </Container>
  )
}

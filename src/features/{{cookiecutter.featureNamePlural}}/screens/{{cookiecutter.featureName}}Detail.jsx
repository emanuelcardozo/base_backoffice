import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Card,
  Container,
  Stack,
  List,
  ListItem,
  ListItemText,
  CardHeader,
  CardContent,
} from '@mui/material'
import SectionBackButton from 'components/SectionBackButton'
import LoadingValue from 'components/LoadingValue'
import useFetchCategoryDetail from '../hooks/use{{cookiecutter.featureName}}Detail'

const BASIC_DETAILS_FIELDS = ['name', 'active', 'createdAt']

export default function CategoryDetail() {
  const { id } = useParams()
  const { t } = useTranslation('features', { keyPrefix: 'Categories' })
  const { category, loading } = useFetchCategoryDetail(id)
  const isLoading = loading || category === null

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <SectionBackButton label={t('listing.title')} to="/categories" />
        <Card>
          <CardHeader title={t('details.details')} />
          <CardContent sx={{ pt: 0 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {BASIC_DETAILS_FIELDS.map((fieldName) => (
                <ListItem key={fieldName} disableGutters>
                  <ListItemText
                    primary={t(`fields.${fieldName}`)}
                    secondary={<LoadingValue loading={isLoading} value={category?.[fieldName]} />}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  )
}

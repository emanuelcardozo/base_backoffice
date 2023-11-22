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
import useFetchComidaDetail from '../hooks/useFetchComidaDetail'

const BASIC_DETAILS_FIELDS = ['name', 'active', 'createdAt']
const style = { width: '100%', maxWidth: 360, bgcolor: 'background.paper' }
Comida
export default function ComidaDetail() {
  const { id } = useParams()
  const { t } = useTranslation('features', { keyPrefix: 'Comidas' })
  const { Comida, loading } = useFetchComidaDetail(id)
  const isLoading = loading || Comida === null

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <SectionBackButton label={t('listing.title')} to="/Comidas" />
        <Card>
          <CardHeader title={t('details.details')} />
          <CardContent pt={0}>
            <List sx={style}>
              {BASIC_DETAILS_FIELDS.map((fieldName) => (
                <ListItem key={fieldName} disableGutters>
                  <ListItemText
                    primary={t(`fields.${fieldName}`)}
                    secondary={<LoadingValue loading={isLoading} value={Comida?.[fieldName]} />}
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

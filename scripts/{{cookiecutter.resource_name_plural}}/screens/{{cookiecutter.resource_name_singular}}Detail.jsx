import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useFetch{{cookiecutter.resource_name_singular}}Detail from '../hooks/useFetch{{cookiecutter.resource_name_singular}}Detail'

import DetailSectionBody from 'components/DetailSectionBody/DetailSectionBody'
import FeatureDetailLayout from 'layouts/FeatureDetailLayout'
import { Card } from '@mui/material'

const BASIC_DETAILS_FIELDS = [
  {% for field in cookiecutter.__fields %}
    "{{field.name}}",
  {% endfor %}
]

export default function {{cookiecutter.resource_name_singular}}Detail() {
  const { id } = useParams()
  const { t } = useTranslation('features', { keyPrefix: '{{cookiecutter.resource_name_plural}}' })
  const { {{cookiecutter.resource_name_singular|lower}}, loading } = useFetch{{cookiecutter.resource_name_singular}}Detail(id)

  const fieldList = useMemo(() => {
    return BASIC_DETAILS_FIELDS.map((fieldName) => ({
      name: fieldName,
      label: t(`fields.${fieldName}`),
    }))
  }, [t])

  return (
    <FeatureDetailLayout t={t} goBackTo="/{{cookiecutter.resource_name_plural|lower}}">
      <Card>
        <DetailSectionBody fieldsList={fieldList} data={ {{cookiecutter.resource_name_singular|lower}} } loading={loading} />
      </Card>
    </FeatureDetailLayout>
  )
}

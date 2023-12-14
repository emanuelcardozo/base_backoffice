import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import use{{cookiecutter.resource_name_singular}}Edition from '../hooks/use{{cookiecutter.resource_name_singular}}Edition'
import useFetch{{cookiecutter.resource_name_singular}}Detail from '../hooks/useFetch{{cookiecutter.resource_name_singular}}Detail'
import use{{cookiecutter.resource_name_singular}}FormCancelDialog from '../hooks/use{{cookiecutter.resource_name_singular}}FormCancelDialog'
import { edition{{cookiecutter.resource_name_singular}}FromAPI } from '../transformers'

import {{cookiecutter.resource_name_singular}}Form from '../components/{{cookiecutter.resource_name_singular}}Form'
import FeatureFormLayout from 'layouts/FeatureFormLayout'

export default function {{cookiecutter.resource_name_singular}}Edition() {
  const { t } = useTranslation('features', { keyPrefix: '{{cookiecutter.resource_name_plural}}' })
  const { id } = useParams()
  const { onClickOpenConfirm } = use{{cookiecutter.resource_name_singular}}FormCancelDialog({ mode: 'edit' })
  const { {{cookiecutter.resource_name_singular|lower}}, loading } = useFetch{{cookiecutter.resource_name_singular}}Detail(id, edition{{cookiecutter.resource_name_singular}}FromAPI)
  const { onSubmit, loading: isSubmitting } = use{{cookiecutter.resource_name_singular}}Edition(id)

  return (
    <FeatureFormLayout t={t} goBackTo="/{{cookiecutter.resource_name_plural}}" mode="edit">
      <{{cookiecutter.resource_name_singular}}Form
        onSubmit={onSubmit}
        initialValues={ {{cookiecutter.resource_name_singular|lower}} }
        mode="edit"
        isLoading={loading}
        isSubmitting={isSubmitting}
        onCancel={onClickOpenConfirm}
      />
    </FeatureFormLayout>
  )
}

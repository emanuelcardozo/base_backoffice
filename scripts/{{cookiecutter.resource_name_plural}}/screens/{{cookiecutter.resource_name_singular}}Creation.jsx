import { useTranslation } from 'react-i18next'
import use{{cookiecutter.resource_name_singular}}FormCancelDialog from '../hooks/use{{cookiecutter.resource_name_singular}}FormCancelDialog'
import use{{cookiecutter.resource_name_singular}}Creation from '../hooks/use{{cookiecutter.resource_name_singular}}Creation'

import {{cookiecutter.resource_name_singular}}Form from '../components/{{cookiecutter.resource_name_singular}}Form'
import FeatureFormLayout from 'layouts/FeatureFormLayout'

export default function {{cookiecutter.resource_name_singular}}Creation() {
  const { t } = useTranslation('features', { keyPrefix: '{{cookiecutter.resource_name_plural}}' })
  const { onClickOpenConfirm } = use{{cookiecutter.resource_name_singular}}FormCancelDialog()
  const { onSubmit, loading: isSubmitting } = use{{cookiecutter.resource_name_singular}}Creation()

  return (
    <FeatureFormLayout t={t} goBackTo="/{{cookiecutter.resource_name_plural}}">
      <{{cookiecutter.resource_name_singular}}Form onSubmit={onSubmit} isSubmitting={isSubmitting} onCancel={onClickOpenConfirm} />
    </FeatureFormLayout>
  )
}

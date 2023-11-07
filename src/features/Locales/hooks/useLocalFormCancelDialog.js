import { useConfirm } from 'material-ui-confirm'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function useLocalesFormCancelDialog({ mode = 'create' } = {}) {
  const { t } = useTranslation('features', { keyPrefix: `Local.${mode}.cancelDialog` })
  const confirm = useConfirm()
  const navigate = useNavigate()

  const onClickOpenConfirm = useCallback(() => {
    confirm({
      title: t('title'),
      content: t('content'),
      confirmationText: t('confirm'),
      cancellationText: t('cancel'),
    }).catch(() => {
      navigate('/Local')
    })
  }, [t, confirm, navigate])

  return { onClickOpenConfirm }
}

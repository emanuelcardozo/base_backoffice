import { useConfirm } from 'material-ui-confirm'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function usePokemonesFormCancelDialog({ mode = 'create' } = {}) {
  const { t } = useTranslation('features', { keyPrefix: `Pokemon.${mode}.cancelDialog` })
  const confirm = useConfirm()
  const navigate = useNavigate()

  const onClickOpenConfirm = useCallback(() => {
    confirm({
      title: t('title'),
      content: t('content'),
      confirmationText: t('confirm'),
      cancellationText: t('cancel'),
    }).catch(() => {
      navigate('/Pokemon')
    })
  }, [t, confirm, navigate])

  return { onClickOpenConfirm }
}

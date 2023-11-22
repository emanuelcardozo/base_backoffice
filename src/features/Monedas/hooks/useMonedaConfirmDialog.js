import { useConfirm } from 'material-ui-confirm'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config from 'src/config.js'
import useFetch from 'hooks/useFetch.js'

export default function useMonedasConfirmDialog(refresh) {
  const { t } = useTranslation('features', { keyPrefix: 'Moneda' })
  const confirm = useConfirm()
  const { doFetch } = useFetch()

  const onClickOpenConfirm = useCallback(
    (Monedas) => {
      const action = Monedas?.hidden ? 'unhide' : 'hide'

      confirm({
        title: t('dialog.title', { action: t(`dialog.${action}`) }),
        content: t('dialog.content', { action: t(`dialog.${action}`) }),
        confirmationText: t(`dialog.${action}`),
        cancellationText: t('dialog.cancel'),
      })
        .then(() => {
          doFetch({
            method: 'PATCH',
            url: `${config.api.msMoneda.baseUrl}/Moneda/${(Monedas).id}`,
            data: {
              active: Monedas?.hidden,
            },
          }).then(refresh)
        })
        .catch(() => {
          console.log('cancel', null)
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, confirm, refresh]
  )

  return { onClickOpenConfirm }
}

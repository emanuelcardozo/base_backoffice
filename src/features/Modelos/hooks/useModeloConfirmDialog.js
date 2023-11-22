import { useConfirm } from 'material-ui-confirm'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config from 'src/config.js'
import useFetch from 'hooks/useFetch.js'

export default function useModelosConfirmDialog(refresh) {
  const { t } = useTranslation('features', { keyPrefix: 'Modelo' })
  const confirm = useConfirm()
  const { doFetch } = useFetch()

  const onClickOpenConfirm = useCallback(
    (Modelos) => {
      const action = Modelos?.hidden ? 'unhide' : 'hide'

      confirm({
        title: t('dialog.title', { action: t(`dialog.${action}`) }),
        content: t('dialog.content', { action: t(`dialog.${action}`) }),
        confirmationText: t(`dialog.${action}`),
        cancellationText: t('dialog.cancel'),
      })
        .then(() => {
          doFetch({
            method: 'PATCH',
            url: `${config.api.msModelo.baseUrl}/Modelo/${(Modelos).id}`,
            data: {
              active: Modelos?.hidden,
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

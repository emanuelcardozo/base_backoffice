import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import config from 'config'
import useFetch from 'hooks/useFetch'
import { useConfirm } from 'material-ui-confirm'
import { useSnackbar } from 'notistack'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export default function useValidateConfirmDialog({ onSuccess, onCancel, onError }) {
  const { t } = useTranslation('features', { keyPrefix: 'Transactions' })
  const { doFetch } = useFetch()
  const confirm = useConfirm()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const validate = useCallback(
    (transaction) =>
      doFetch({
        url: `${config.api.msTransactions.baseUrl}/transactions/${transaction.id}/validate`,
        method: 'POST',
      }),
    [doFetch]
  )

  const showSuccessSnackbar = useCallback(
    (transaction) => {
      enqueueSnackbar(
        t('dialog.validatedSuccessfully', {
          code: transaction.code,
        }),
        {
          preventDuplicate: false,
          variant: 'success',
        }
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  const showErrorSnackbar = useCallback(
    (transaction) => {
      enqueueSnackbar(t('dialog.validatedError', { code: transaction.code }), {
        preventDuplicate: false,
        variant: 'error',
        autoHideDuration: 2000,
        maxSnack: 1,
        action: (
          <RetryButtonSnackbar
            onClick={() => {
              validate(transaction)
              closeSnackbar()
              showErrorSnackbar(transaction)
            }}
            label={t('dialog.retry')}
          />
        ),
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  const openValidateConfirmDialog = useCallback(
    (transaction) => {
      return confirm({
        title: t('dialog.title', { action: t(`dialog.confirm`) }),
        content: t('dialog.content', {
          action: t(`dialog.confirm`),
          transactionCode: transaction.code,
        }),
        confirmationText: t(`dialog.confirm`),
        cancellationText: t('dialog.cancel'),
      })
        .then(() =>
          validate(transaction)
            .then(() => {
              if (onSuccess) onSuccess(transaction)
              showSuccessSnackbar(transaction)
            })
            .catch(() => {
              if (onError) onError(transaction)
              showErrorSnackbar(transaction)
            })
        )
        .catch(() => {
          if (onCancel) onCancel(transaction)
        })
    },
    [t, confirm, validate, showSuccessSnackbar, showErrorSnackbar, onSuccess]
  )

  return { openValidateConfirmDialog }
}

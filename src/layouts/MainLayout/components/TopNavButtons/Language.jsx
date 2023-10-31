import ukImg from 'src/assets/flag-uk.svg'
import esImg from 'src/assets/flag-es.svg'
import { useTranslation } from 'react-i18next'
import { LanguagePopover } from '../LanguagePopover'
import { usePopover } from 'src/hooks/use-popover'
import { IconButton, Tooltip } from '@mui/material'

function Language() {
  const languagePopover = usePopover()

  const {
    i18n: { changeLanguage, language },
  } = useTranslation()

  const handleChangeLanguage = (selectedLanguage) => {
    changeLanguage(selectedLanguage)
  }

  return (
    <>
      <Tooltip title="Language">
        <IconButton
          onClick={languagePopover.handleOpen}
          ref={languagePopover.anchorRef}
          sx={{
            cursor: 'pointer',
            height: 40,
            width: 40,
          }}
        >
          <img width="30" src={language === 'en' ? ukImg : esImg} alt="language" />
        </IconButton>
      </Tooltip>
      <LanguagePopover
        anchorEl={languagePopover.anchorRef.current}
        open={languagePopover.open}
        onClose={languagePopover.handleClose}
        changeLanguage={handleChangeLanguage}
      />
    </>
  )
}

Language.propTypes = {}

export default Language

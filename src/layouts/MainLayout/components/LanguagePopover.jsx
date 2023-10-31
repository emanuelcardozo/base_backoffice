import PropTypes from 'prop-types'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Popover,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import ukImg from '../../../assets/flag-uk.svg'
import esImg from '../../../assets/flag-es.svg'

export const LanguagePopover = (props) => {
  const { anchorEl, onClose, open, changeLanguage } = props
  const { t } = useTranslation('common')

  const handleChangeLanguage = (selectedLanguage) => () => {
    changeLanguage(selectedLanguage)
    onClose()
  }

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {t('top_nav.change_language')}
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleChangeLanguage('en')}>
            <ListItemIcon>
              <img width="30" src={ukImg} alt="uk" />
            </ListItemIcon>
            <ListItemText primary="English" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleChangeLanguage('es')}>
            <ListItemIcon>
              <img width="30" src={esImg} alt="es" />
            </ListItemIcon>
            <ListItemText primary="Español" />
          </ListItemButton>
        </ListItem>
      </List>
    </Popover>
  )
}

LanguagePopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  changeLanguage: PropTypes.func,
}

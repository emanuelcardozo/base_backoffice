import { useState } from 'react'
import { IconButton, SvgIcon, TextField } from '@mui/material'
import EyeIcon from '@heroicons/react/24/solid/EyeIcon'
import EyeSlashIcon from '@heroicons/react/24/solid/EyeSlashIcon'

function PasswordTextField(textFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            <SvgIcon fontSize="small">{showPassword ? <EyeSlashIcon /> : <EyeIcon />}</SvgIcon>
          </IconButton>
        ),
      }}
      {...textFieldProps}
    />
  )
}

export default PasswordTextField

import PropTypes from 'prop-types'
import { CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material'
import LoadingValue from 'components/LoadingValue/LoadingValue'

function DetailSectionBody({ title, fieldsList, data, loading }) {
  return (
    <>
      {title && <CardHeader title={title} />}
      <CardContent sx={{ pt: 0 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {fieldsList.map(({ name, label }) => (
            <ListItem key={name} disableGutters>
              <ListItemText
                primary={label}
                secondary={<LoadingValue loading={loading} value={data?.[name]} />}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </>
  )
}

DetailSectionBody.defaultProps = {
  title: '',
  data: null,
  loading: false,
}

DetailSectionBody.propTypes = {
  title: PropTypes.string,
  fieldsList: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, label: PropTypes.string })
  ).isRequired,
  data: PropTypes.object,
  loading: PropTypes.bool,
}

export default DetailSectionBody

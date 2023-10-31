import PropTypes from 'prop-types'
import { Card, Stack, CardHeader, CardContent, Grid } from '@mui/material'

function CardFormBlock({ title, subtitle, children }) {
  return (
    <Card>
      <Grid container>
        <Grid xs={12} md={4} item>
          <CardHeader title={title} subheader={subtitle} />
        </Grid>
        <Grid xs={12} md={8} item>
          <CardContent>
            <Stack spacing={3}>{children}</Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

CardFormBlock.defaultProps = {
  subtitle: null,
}

CardFormBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default CardFormBlock

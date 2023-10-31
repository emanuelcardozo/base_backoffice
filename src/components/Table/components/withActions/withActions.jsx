import TableWithActions from './TableWithActions'

function withActions(Component) {
  return function wrapped(props) {
    return <TableWithActions as={Component} {...props} />
  }
}

export default withActions

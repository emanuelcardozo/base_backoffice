import PaginatedTable from './PaginatedTable'

function withPagination(Component) {
  return function wrapped(props) {
    return <PaginatedTable as={Component} {...props} />
  }
}

export default withPagination

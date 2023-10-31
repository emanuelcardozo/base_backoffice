import SortableTable from './SortableTable'

function withSortHeaders(Component) {
  return function wrapped(props) {
    return <SortableTable as={Component} {...props} />
  }
}

export default withSortHeaders

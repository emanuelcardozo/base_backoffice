import MultiSelectTable from './MultiSelectTable'

function withMultiSelect(Component) {
  return function wrapped(props) {
    return <MultiSelectTable as={Component} {...props} />
  }
}

export default withMultiSelect

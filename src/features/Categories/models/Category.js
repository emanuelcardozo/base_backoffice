class Category {
  constructor(
    id,

    name,

    active
  ) {
    this.id = id

    this.name = name

    this.active = active
  }

  static fromAPI(data = {}) {
    const {
      id,

      name,

      active,
    } = data

    return new Category(
      id,

      name,

      active
    )
  }
}

export default Category

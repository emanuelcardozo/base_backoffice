class Pokemon {
  constructor(
    name,

    id,

    skills
  ) {
    this.name = name

    this.id = id

    this.skills = skills
  }

  static fromAPI(data = {}) {
    return new Pokemon(data)
  }
}

export default Pokemon

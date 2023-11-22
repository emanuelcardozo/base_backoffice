class Pokemon {
  constructor(
    nombre,

    edad,

    adulto
  ) {
    this.nombre = nombre

    this.edad = edad

    this.adulto = adulto
  }

  static fromAPI(data = {}) {
    return new Pokemon(data)
  }
}

export default Pokemon

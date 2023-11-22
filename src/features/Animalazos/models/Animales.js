class Animales {
  constructor(
    nombre,

    edad,

    macho
  ) {
    this.nombre = nombre

    this.edad = edad

    this.macho = macho
  }

  static fromAPI(data = {}) {
    return new Animales(data)
  }
}

export default Animales

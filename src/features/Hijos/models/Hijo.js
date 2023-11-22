class Hijo {
  constructor(
    nombre,

    edad,

    fecha_nacimiento
  ) {
    this.nombre = nombre

    this.edad = edad

    this.fecha_nacimiento = fecha_nacimiento
  }

  static fromAPI(data = {}) {
    return new Hijo(data)
  }
}

export default Hijo

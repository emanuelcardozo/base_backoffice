class Comida {
  constructor(
    nombre,

    fecha,

    dia
  ) {
    this.nombre = nombre

    this.fecha = fecha

    this.dia = dia
  }

  static fromAPI(data = {}) {
    return new Comida(data)
  }
}

export default Comida

class Perro {
  constructor(
    nombre,

    fecha,

    id,

    lindo,

    gustos
  ) {
    this.nombre = nombre

    this.fecha = fecha

    this.id = id

    this.lindo = lindo

    this.gustos = gustos
  }

  static fromAPI(data = {}) {
    return new Perro(data)
  }
}

export default Perro

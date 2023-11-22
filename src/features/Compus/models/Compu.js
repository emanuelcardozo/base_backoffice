class Compu {
  constructor(
    nombre,

    marca,

    id,

    linda
  ) {
    this.nombre = nombre

    this.marca = marca

    this.id = id

    this.linda = linda
  }

  static fromAPI(data = {}) {
    return new Compu(data)
  }
}

export default Compu

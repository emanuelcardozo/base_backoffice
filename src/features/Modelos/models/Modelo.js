class Modelo {
  constructor(
    
    id,
    
    nombre,
    
    fecha,
    
  ) {
    
    this.id = id
    
    this.nombre = nombre
    
    this.fecha = fecha
    
  }

  static fromAPI(data = {}) {
    return new Modelo(data)
  }
}

export default Modelo

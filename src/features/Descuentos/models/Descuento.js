class Descuento {
  constructor(
    
    id,
    
    detalle,
    
    activo,
    
  ) {
    
    this.id = id
    
    this.detalle = detalle
    
    this.activo = activo
    
  }

  static fromAPI(data = {}) {
    return new Descuento(data)
  }
}

export default Descuento

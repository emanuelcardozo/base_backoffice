class Moneda {
  constructor(
    
    tamano,
    
    detalle,
    
    existe,
    
  ) {
    
    this.tamano = tamano
    
    this.detalle = detalle
    
    this.existe = existe
    
  }

  static fromAPI(data = {}) {
    return new Moneda(data)
  }
}

export default Moneda

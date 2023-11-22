class Mate {
  constructor(
    
    tamano,
    
    nombre2,
    
    caro,
    
  ) {
    
    this.tamano = tamano
    
    this.nombre2 = nombre2
    
    this.caro = caro
    
  }

  static fromAPI(data = {}) {
    return new Mate(data)
  }
}

export default Mate

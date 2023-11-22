class Pokemon {
  constructor(
    
    nombre,
    
    edad,
    
    atrapado,
    
  ) {
    
    this.nombre = nombre
    
    this.edad = edad
    
    this.atrapado = atrapado
    
  }

  static fromAPI(data = {}) {
    return new Pokemon(data)
  }
}

export default Pokemon

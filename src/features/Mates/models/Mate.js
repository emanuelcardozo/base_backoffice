class Mate {
  constructor(
    color,

    lindo,

    id
  ) {
    this.color = color

    this.lindo = lindo

    this.id = id
  }

  static fromAPI(data = {}) {
    return new Mate(data)
  }
}

export default Mate

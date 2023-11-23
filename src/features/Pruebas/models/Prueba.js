class Prueba {
  constructor(
    string,

    date,

    time,

    datetime,

    array,

    number
  ) {
    this.string = string

    this.date = date

    this.time = time

    this.datetime = datetime

    this.array = array

    this.number = number
  }

  static fromAPI(data = {}) {
    return new Prueba(data)
  }
}

export default Prueba

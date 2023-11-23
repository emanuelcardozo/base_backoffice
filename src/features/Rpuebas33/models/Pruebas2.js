class Pruebas2 {
  constructor(
    date,

    datetime,

    time,

    array
  ) {
    this.date = date

    this.datetime = datetime

    this.time = time

    this.array = array
  }

  static fromAPI(data = {}) {
    return new Pruebas2(data)
  }
}

export default Pruebas2

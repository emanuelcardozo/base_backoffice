class Hola {
  constructor(
    date,

    time,

    datetime,

    array
  ) {
    this.date = date

    this.time = time

    this.datetime = datetime

    this.array = array
  }

  static fromAPI(data = {}) {
    return new Hola(data)
  }
}

export default Hola

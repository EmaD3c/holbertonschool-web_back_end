export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // if its number
  valueOf() {
    return this._size;
  }

  // if its string
  toString() {
    return this._location;
  }
}

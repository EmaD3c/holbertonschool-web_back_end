export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Use `new this.constructor[Symbol.species]` to create a new instance of the same class
    return new this.constructor[Symbol.species]();
  }

  // Set Symbol.species to return the Car class itself
  static get [Symbol.species]() {
    return this;
  }
}

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string') {
      this._brand = value;
    } else {
      throw new TypeError('Brand must be a string');
    }
  }

  get motor() {
    return this._brand;
  }

  set motor(value) {
    if (typeof value === 'string') {
      this._motor = value;
    } else {
      throw new TypeError('Motor must be string');
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value === 'string') {
      this._color = value;
    } else {
      throw new TypeError('Color must be a string');
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}

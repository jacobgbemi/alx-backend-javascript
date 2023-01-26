import Currency from './3-currency';

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters and setters
  get amount () {
    return this._amount;
  }

  set amount (value) {
    this._amount = value;
  }

  get currency () {
    return this._currency;
  }

  set currency (value) {
    this._currency = value;
  }

  // Method to display the full price
  displayFullPrice () {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}

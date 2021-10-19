export default class Account {
  #retirement;
  #balance = 0;
  #deposit;

  constructor(balance, retirement, deposit){
    this.#balance = balance;
    this.#retirement = retirement;
    this.#deposit = deposit;
  }

  getBalance() {
    return this.#balance;
  }

  calcDeposit(deposit) {
    this.#balance = this.#balance + deposit;
    alert('Depósito Exitoso');
  }

  calcRetirement(retirement){
    if (this.#balance >= retirement){
      this.#balance = this.#balance - retirement;
      alert('Retiro Exitoso');
    }
    else{
      alert('Dinero Insuficiente');
    }
  }

  get retirement() {
    return this.#retirement;
  }

  get deposit() {
    return this.#deposit;
  }

  get balance() {
    return this.#balance;
  }

  set retirement(newValue) {
    this.#retirement = newValue
  }

  set deposit(newValue) {
    this.#deposit = newValue
  }
}
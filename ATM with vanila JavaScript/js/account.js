export default class Account {
  #withdraw;
  #balance = 0;
  #deposit;

  constructor(balance, withdraw, deposit){
    this.#balance = balance;
    this.#withdraw = withdraw;
    this.#deposit = deposit;
  }

  getBalance() {
    return this.#balance;
  }

  calcDeposit(deposit) {
    this.#balance = this.#balance + deposit;
    alert('Depósito Exitoso');
  }

  calcWithdraw(withdraw){
    if (this.#balance >= withdraw){
      this.#balance = this.#balance - withdraw;
      alert('Retiro Exitoso');
    }
    else{
      alert('Dinero Insuficiente');
    }
  }

  get withdraw() {
    return this.#withdraw;
  }

  get deposit() {
    return this.#deposit;
  }

  get balance() {
    return this.#balance;
  }

  set withdraw(newValue) {
    this.#withdraw = newValue
  }

  set deposit(newValue) {
    this.#deposit = newValue
  }
}
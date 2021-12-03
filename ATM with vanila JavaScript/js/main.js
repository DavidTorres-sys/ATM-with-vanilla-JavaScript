import Account from './account.js';

// Initializations
const account = new Account(0, 0, 0);

// To Deposit
function toDeposit() {
  toDeposit = parseFloat(document.getElementById('deposit_input').value);
  account.calcDeposit(toDeposit)

  let dealingsRecord = document.getElementById('dealings_record');
  dealingsRecord.innerHTML += 'Deposito ' + toDeposit + ' USD' + "<hr />";
}

const buttonDeposit = document.getElementById('deposit_button');
buttonDeposit.addEventListener('click', toDeposit);

// Calc Balance
function calcBalance() {
  let balance = account.balance;
  document.getElementById('balance_input').value = balance;
}

const balanceButton = document.getElementById('balance_button');
balanceButton.addEventListener('click', calcBalance);

// withdraw
function withdraw() {
  withdraw = parseFloat(document.getElementById('withdraw_input').value);
  account.calcWithdraw(withdraw)

  let dealingsRecord = document.getElementById('dealings_record');
  dealingsRecord.innerHTML += 'Retiro ' + '-' + withdraw + ' USD' + "<hr />";

}

const withdrawButton = document.getElementById("withdraw_button");
withdrawButton.addEventListener('click', withdraw);

//# transaction

const btnDeposit = document.getElementById('deposit_button');
const btnWithdraw = document.getElementById('withdraw_button');
const spanDeposit = document.getElementById('dealings_recordTop');
const spanWithdraw = document.getElementById('dealings_recordBot')
let counter = 0
let withdrawcounter = 0

btnDeposit.addEventListener('click', () => { 
  counter++
  spanDeposit.textContent =  counter
})


btnWithdraw.addEventListener('click', () => { 
  withdrawcounter++
  spanWithdraw.textContent =  withdrawcounter

})
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

// Retirement
function retirement() {
  retirement = parseFloat(document.getElementById('retirement_input').value);
  account.calcRetirement(retirement)

  let dealingsRecord = document.getElementById('dealings_record');
  dealingsRecord.innerHTML += 'Retiro ' + '-' + retirement + ' USD' + "<hr />";

}

const retirementButton = document.getElementById('retirement_button');
retirementButton.addEventListener('click', retirement);

//# transaction

const btnDeposit = document.getElementById('deposit_button');
const btnRetirement = document.getElementById('retirement_button');
const spanDeposit = document.getElementById('dealings_recordTop');
const spanRetirement = document.getElementById('dealings_recordBot')
let contador = 0
let retirementcounter = 0

btnDeposit.addEventListener('click', () => { 
  contador++
  spanDeposit.textContent =  contador
})


btnRetirement.addEventListener('click', () => { 
  retirementcounter++
  spanRetirement.textContent =  retirementcounter
})
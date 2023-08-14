// here login button work
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener('click', () => {
    document.querySelector('.login-form').style.display = "none";
    document.querySelector('.banker-hisab').style.display = "block";
})

// for display
// const deposite = document.querySelector('#depo-balance').innerText;
// const withdraw = document.querySelector('#with-balance').innerText;
// const total = document.querySelector('#total-balance').innerText;
// console.log(deposite, withdraw, total);

// for output
    // const depositeAmount = document.querySelector('#deposite-amount').value;
    // const withdrawAmount = document.querySelector('#withdraw-amount').value;

// button
const depoButton = document.querySelector('#deposite');
const withButton = document.querySelector('#withdraw');

depoButton.addEventListener('click', () => {
    const depositeAmount = document.querySelector('#deposite-amount').value;
    const depoParseFloat = parseFloat(depositeAmount);
    const deposite = document.querySelector('#depo-balance').innerText;
    const depositeParseFloat = parseFloat(deposite);
    let total = depoParseFloat + depositeParseFloat;
    document.querySelector('#depo-balance').innerText = total;
    document.querySelector('#deposite-amount').value = '';
    // total
    const totalAmount = document.querySelector('#total-balance').innerText;
    const totalParseFloat = parseFloat(document.querySelector('#total-balance').innerText);
    let displayTotal = depoParseFloat + totalParseFloat;
    document.querySelector('#total-balance').innerText = displayTotal;
    document.querySelector('#deposite-amount').value = '';
})
withButton.addEventListener('click', () => {
    const withdrawAmount = document.querySelector('#withdraw-amount').value;
    const withParseFloat = parseFloat(withdrawAmount);
    
    const withdraw = document.querySelector('#with-balance').innerText;
    const withdrawParseFloat = parseFloat(withdraw);
    let total = withParseFloat + withdrawParseFloat;
    const totalWithdraw = document.querySelector('#with-balance').innerText = total;
    document.querySelector('#withdraw-amount').value = '';
    let totalBalance = document.querySelector('#total-balance').innerText;
    totalBalance -= withParseFloat;
    document.querySelector('#total-balance').innerText = totalBalance;
})



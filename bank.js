// here login button work
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener('click', () => {
    document.querySelector('.login-form').style.display = "none";
    document.querySelector('.banker-hisab').style.display = "block";
})

// for output
const withdraw = document.querySelector('.taka-withdraw');
const balance = document.querySelector('.balance');

// for input
const setDeposite = document.querySelector('#deposite');
const withdrawInput = document.querySelector('#withdraw').value;

setDeposite.addEventListener('click', () => {
    const depositeAmount = document.querySelector('#deposite-amount').value;
    const value = parseFloat(depositeAmount);

    const deposite = document.querySelector('.taka-deposite');
    const setDeposite = parseFloat(deposite);
    const total = setDeposite + value;
    console.log(total);

})
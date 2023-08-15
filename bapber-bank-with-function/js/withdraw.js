withButton.addEventListener('click', () => {
    const displayTotalAmount = document.querySelector('#total-balance').innerText;
    const totalParseFloat = parseFloat(displayTotalAmount);
    const input = inputfieldAndInnerTextField('withdraw-amount');
    const withDisplay = totalAmount('with-balance');
    // let totalWithdraw = input + withDisplay;
    // document.querySelector('#with-balance').innerText = totalWithdraw;
    // document.querySelector('#withdraw-amount').value = '';

    // total
    const finalTotal = (displayTotalAmount - input)
    if (totalParseFloat < input) {
        window.alert("You don't have enough Money to Withdraw!!!");
    } else if (input < 0) {
        window.alert("Invalid Selection !!!")
    } else {
        let totalWithdraw = input + withDisplay;
        document.querySelector('#with-balance').innerText = totalWithdraw;
        document.querySelector('#total-balance').innerText = finalTotal;
    }
    document.querySelector('#withdraw-amount').value = '';
})
const depoButton = document.querySelector('#deposite');
const withButton = document.querySelector('#withdraw');

depoButton.addEventListener('click', () => {
    const depositeAmount = inputfieldAndInnerTextField('deposite-amount');
    const grandTotal = totalAmount('depo-balance');
    if (depositeAmount >= 0) {
        let totalDeposite = depositeAmount + grandTotal;
        document.querySelector('#depo-balance').innerText = totalDeposite;
        // total
        const displayTotalAmount = document.querySelector('#total-balance').innerText;
        const totalParseFloat = parseFloat(displayTotalAmount);
        let finalTotal = depositeAmount + totalParseFloat;
        document.querySelector('#total-balance').innerText = finalTotal;
    } else {
        window.alert("Invalid Selection !!!")
    }
    document.querySelector('#deposite-amount').value = '';

})
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener('click', () => {
    document.querySelector('.login-form').style.display = "none";
    document.querySelector('.banker-hisab').style.display = "block";
})

function inputfieldAndInnerTextField(inputId, displayText) {
    const input = document.getElementById(inputId).value;
    const inputAmount = parseFloat(input);
    return inputAmount
}

function totalAmount(displayText) {
    const display = document.getElementById(displayText).innerText;
    const totalAmount = parseFloat(display);
    return totalAmount;
}
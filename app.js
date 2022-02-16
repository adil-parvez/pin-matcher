function getPin() {    
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }else{
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

document.getElementById("keypad").addEventListener('click', function (event) {
    const clickedPin = event.target.innerText;
    const calcInput = document.getElementById("pin-show");

    if (isNaN(clickedPin)) {
        if (clickedPin == "C") {
            calcInput.value ="";
        }
    }else{
        const previousInput = calcInput.value;
        const totalInput = previousInput + clickedPin;
        calcInput.value = totalInput;
    }

})

function submitBtn() {
    const pin = document.getElementById("display-pin").value;
    const typed = document.getElementById("pin-show").value;

    if (pin == typed) {
        const successMessage = document.getElementById("match-message");
        successMessage.style.display = "block";
        const failMessage = document.getElementById("unmatch-message");
        failMessage.style.display = "none";
    }else{
        const failMessage = document.getElementById("unmatch-message");
        failMessage.style.display = "block";
        const successMessage = document.getElementById("match-message");
        successMessage.style.display = "none";
    }
}

// function for get a pin
function getPin(){

    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '' ;

    if (pinString.length == 4) {
        return pin ;
    } else {
        return getPin();
    }
};

//get generated pin
function generatePin(){
    const pin = getPin();
    document.getElementById('generated-pin').value = pin ;
};

// generate pin event
document.getElementById('generate-button').addEventListener('click',function(){
    generatePin();
});

// input pin event
document.getElementById('key-pad').addEventListener('click', function(event){
    const num = event.target.innerText;
    const inputNum = document.getElementById('typed-pin');
    if (isNaN(num)) {
        if (num == 'C') {
            inputNum.value = '';
        }
        
    } else {
        const previousNum = inputNum.value;
        const newNum = previousNum + num;
        inputNum.value = newNum ;
    }
});

// verify event 
document.getElementById('verify-button').addEventListener('click', function(){
    const generatePin = document.getElementById('generated-pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    const notifyFail = document.getElementById('notify-fail');
    const notifySuccess = document.getElementById('notify-success');

    if (generatePin == typedPin) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    } else {
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }

    document.getElementById('verify-button').disabled = true ;
});

var currentNumberWrapper= document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    if (currentNumber < 100){
        currentNumber = currentNumber +1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if (currentNumber > -100){
        currentNumber = currentNumber -1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else
    currentNumberWrapper.innerHTML = currentNumber;

}
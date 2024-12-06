const decreaseBtn = document.getElementById("btn1");
const resetBtn = document.getElementById("btn2");
const increaseBtn = document.getElementById("btn3");
const countLabel = document.getElementById("countlabel");

let count = 0;

//Decrease
decreaseBtn.onclick = function (){
    count--;
    countLabel.textContent = count;
}

//Increase
increaseBtn.onclick = function (){
    count++;
    countLabel.textContent = count;
}

// Reset

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
let name = "Adel Mahmoud"

console.log(name.indexOf(" "))
console.log(name.slice(0,4))



const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let num = 0;

decreaseBtn.onclick = function(){
    num -= 1;
    countLabel.textContent = num;
}

increaseBtn.onclick = function(){
    num += 1;
    countLabel.textContent = num;
}

resetBtn.onclick = function(){
    num = 0;
    countLabel.textContent = num;
}

//comment
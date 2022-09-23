var First = document.querySelector("#first")
var Second = document.querySelector("#second")
var Total = document.querySelector(".Total")
function add(){
Total.innerText=Number(First.value) +Number(Second.value)
return Total 
}
function subtract(){
Total.innerText=First.value-Second.value
return Total
}
function multiply(){
Total.innerText=First.value*Second.value
return Total
}
function divide(){
Total.innerText=First.value/Second.value
return Total
}
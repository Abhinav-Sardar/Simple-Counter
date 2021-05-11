let count = 0 ; 
let countCont = document.getElementById('count') ; 
let buttons= document.querySelectorAll('.btn') ; 
buttons.forEach(button => {
    if(button.innerText === "Increment"){
        button.onclick = () => count++ ; 
    }
    else if(button.innerText === "Reset"){
        button.onclick = () => count=0 ; 
    }
    else {
        button.onclick = () => count-- ; 
    }
})
setInterval(() => {
    if(count < 0){
        countCont.style.color = "red"
    }
    else if(count === 0){
        countCont.style.color = "black"
    }
    else {
        countCont.style.color = "green"
    }
    countCont.innerText = count ; 
}) ; 
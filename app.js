const hour = document.querySelector(".hours")
const minute = document.querySelector(".minutes")
const second = document.querySelector(".seconds")
const setFormat = document.querySelector(".set-format")
const am = document.querySelector(".am")
const pm = document.querySelector(".pm")

let intervalId;

function pMTime(){
    const day = new Date() 
   hour.innerText = day.getHours().toString().padStart(2,"0")
    minute.innerText = day.getMinutes().toString().padStart(2,"0")
   second.innerText = day.getSeconds().toString().padStart(2,"0")
}

function aMTime(){
    let time = new Date()
    let date = time.getHours()
    let currentHour = date%12
    let currentFormat = currentHour?currentHour:12
    hour.innerText = currentFormat.toString().padStart(2,"0")
    minute.innerText = time.getMinutes().toString().padStart(2,"0")
   second.innerText = time.getSeconds().toString().padStart(2,"0")
}


am.addEventListener("click",(e)=>{
    am.classList.add("current")
    pm.classList.remove("current")
    clearInterval(intervalId)
    intervalId = setInterval(aMTime,1000)

})

pm.addEventListener("click",(e)=>{
    pm.classList.add("current")
    am.classList.remove("current")
    clearInterval(intervalId)
    intervalId = setInterval(pMTime,1000)
})


window.addEventListener("load",()=>{  
 intervalId = setInterval(pMTime,1000)
})




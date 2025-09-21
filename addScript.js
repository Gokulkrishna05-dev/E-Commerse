let name=document.getElementById("name")
let num=document.getElementById("num")
let pin=document.getElementById("pincode")
let addr=document.getElementById("add")
let city=document.getElementById("city")
let state=document.getElementById("state")

// Dom element
let NAME=document.querySelector(".NAME")
let NUMBER=document.querySelector(".NUMBER")
let ADDRESS=document.querySelector(".ADDRESS")
let PINCODE=document.querySelector(".PINCODE")
let CITY=document.querySelector(".CITY")
let STATE=document.querySelector(".STATE")

let add=JSON.parse(localStorage.getItem("addr")) || []
let i=0
function save(){
   // Input Validation

   Naam()
   NUM()
   Pin()
   ADDR()
   CIITY()
   ST()

   if(Naam() && NUM() && Pin() && ADDR() && CIITY() && ST()) {
   let cont=[]
   cont.push(addr.value+" ")
   cont.push(pin.value+" ")
   cont.push(city.value+" ")
   cont.push(state.value+" ")
   let str=cont.join(",")
   cont.length=0
   cont.push(str)
   add.push(cont)
   localStorage.setItem("addr",JSON.stringify(add))
   window.location.href="cart.html"
   console.log(add)
   }
}

let Naam=function nameValidate(){
   if(name.value==""){
     NAME.style.display="block"
     return false
   }
   else{
       NAME.style.display="none"
      return true
   }
}

let NUM=function numValidate(){
    if(num.value=="" || num.value.length!=10){
     NUMBER.style.display="block"
     return false
   }
   else{
      NUMBER.style.display="none"
      return true
   }
}

let Pin=function Pinvalidate(){
if(pin.value==""){
     PINCODE.style.display="block"
     return false
   }
   else{
        PINCODE.style.display="none"
        return true
   }
}

let ADDR=function ValidateAddr(){
if(addr.value==""){
      ADDRESS.style.display="block"
      return false
   }
   else{
        ADDRESS.style.display="none"
        return true
   }
}

let CIITY= function ValidateCity(){
if(city.value==""){
      CITY.style.display="block"
      return false
   }
   else{
      CITY.style.display="none"
      return true
   }
}

let ST= function ValidateCity(){
if(state.value==""){
      STATE.style.display="block"
      return false
   }
   else{
      STATE.style.display="none"
      return true
   }
}




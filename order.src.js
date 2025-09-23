let arr=JSON.parse(localStorage.getItem("order"))|| []
console.log(arr)
let orders_src=document.querySelector(".order-list")
console.log(arr)
let dt=new Date()

let ord=document.querySelector(".ord")


if(arr.length>=1){

   ord.style.display="none"
    orders_src.innerHTML=""
    arr.forEach((ele,i)=>{
    
   let main_2div=document.createElement("div")
   let img_main_div=document.createElement("div")
   let name_div=document.createElement("div")
   let quantity_div=document.createElement("div")
   let total_div=document.createElement("div")
   let method_div=document.createElement("div")
   let address=document.createElement("div")
// Adding Content


// Image div
let img_div=document.createElement("div")
let img=document.createElement("img")
img.src=ele.image
img_div.append(img)
img_main_div.append(img_div)

// Name div
let name_h3=document.createElement("h3")
name_h3.textContent=ele.name
name_div.append(name_h3)

// Quantity div
let quant_p=document.createElement("p")
quant_p.textContent="Quantity: "+ele.qty
quantity_div.append(quant_p)


// Total div
let total_p=document.createElement("p")
total_p.textContent="₹ "+ele.price
total_div.append(total_p)
total_p.classList.add("p")

// Method div
let method_p=document.createElement("p")
method_p.textContent="Method: "+ele.method

let date_p=document.createElement("p")
date_p.textContent="Date: "+ele.Date

let Payment=document.createElement("p")
Payment.textContent="Payment: "+ele.Payment

method_div.append(method_p)
method_div.append(date_p)
method_div.append(Payment)

// Address Div

let add_p=document.createElement("p")
add_p.textContent=ele.Shipping
address.append(add_p)
add_p.classList.add("p")

// Adding class
main_2div.classList.add("main_2div")
img_div.classList.add("cart-img-cont")


// Appending

main_2div.append(img_main_div)
main_2div.append(name_div)
main_2div.append(quantity_div)
main_2div.append(total_div)
main_2div.append(method_div)
main_2div.append(address)
orders_src.append(main_2div)


    })
}
else{
  ord.style.display="block"
}


// let obj=new Date()
// obj.setDate(obj.getDate() + 5)

// let future=obj.toLocaleDateString()
// console.log(future)

// localStorage.clear()
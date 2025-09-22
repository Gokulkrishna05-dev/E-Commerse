// Dom Elements
let main_img = document.querySelector(".main-img-cont img")
let sb1 = document.getElementById("sb1")
let sb2 = document.getElementById("sb2")
let sb3 = document.getElementById("sb3")
let sb4 = document.getElementById("sb4")
let name_dom = document.getElementById("name")
let brand_dom = document.getElementById("brand")
let price_dom = document.getElementById("price")
let des_dom = document.getElementById("des")
let select_size=document.getElementById("select_size")

let selectedProduct=JSON.parse(localStorage.getItem("selectedProduct"))
console.log(selectedProduct)
console.log(selectedProduct)
if (selectedProduct) {
    name_dom.textContent = selectedProduct.name
    price_dom.textContent = selectedProduct.price
    brand_dom.textContent = selectedProduct.brand
    main_img.src = selectedProduct.main
    
    sb1.src = selectedProduct.sd1
    sb2.src = selectedProduct.sd2
    sb3.src = selectedProduct.sd3
    sb4.src = selectedProduct.sd4
    des_dom.textContent = selectedProduct.des

    // For Pants
    let str = selectedProduct.name.split(" ")
    if (!str.includes("Shirt")) {
        let options = [26, 28, 30, 32, 34, 36, 38, 40, 42, 44]
        select_size.innerHTML = ""
        let opt1 = document.createElement("option")
        opt1.value = ""
        opt1.text = "Select Size"
        opt1.selected = true
        opt1.disabled = true
        select_size.append(opt1)
        options.forEach((e) => {
            let opt = document.createElement("option")
            opt.value = e
            opt.text = e
            select_size.append(opt)
        })
    }
}

// Changing Image
let sub_img = document.querySelectorAll(".sub-img-cont img")
sub_img.forEach((e) => {
    e.addEventListener("click", (() => {
        main_img.src = e.src
    }))
})

// Back Button
function back() {
    window.history.back();
}

// Cart Function
let btnn=document.getElementById("addd")
let qty=document.getElementById("input")

btnn.addEventListener("click",(()=>{
     let parent=btnn.parentElement.parentElement.parentElement
     let img=parent.querySelector(".view-img .main-img-cont img").src
     let name=parent.querySelector(".view-text h1").textContent
     let price=parent.querySelector(".view-text b").textContent
     
     let find=cart.some((e)=>{
       return e.name==name
     })
     
     if(find){
        alert("Item already added in the cart")
     }
     else{
        if(qty.value=="" ){
            alert("Enter the quantity")
        }
        else if(qty.value<=0){
            alert("Enter atleast 1 quantity")
        }
        else{
        
        cart.push({name,price,img,total:parseInt(price.replace("₹ ","")*parseInt(qty.value)),input:qty.value})
        localStorage.setItem("cart",JSON.stringify(cart))
        console.log(cart)
        lenshow()
        }
     }
}))

function input(cart){
    cart.forEach((e)=>{
        e.input=qty.value
        console.log(qty)
       
        qty.addEventListener("input",(()=>{
            let val=parseInt(qty.value)
            let price=parseInt(e.price.replace("₹ ",""))
            let cal=1
            e.input=val
            if(!isNaN(val) && val>=1){
              cal=val*price
              e.total=cal
            }
            else{
                console.log(price)
                e.total=price
            }
            console.log(cart)
            localStorage.setItem("cart",JSON.stringify(cart))
            
        }))
    })
}
input(cart)



// localStorage.clear()
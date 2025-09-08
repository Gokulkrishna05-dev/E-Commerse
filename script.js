// Navbar
let cancel = document.getElementById("cancel-btn")
let menu = document.getElementById("menu-btn")
let mob_nav = document.getElementById("mob-nav")
menu.addEventListener("click", (() => {
    mob_nav.style.transform = "translateX(0px)"
}))
cancel.addEventListener("click", (() => {
    mob_nav.style.transform = "translateX(500px)"
}))
// Navbar


// Products Array
let products_arr = [
    {
        name: "Men Solid Casual Grey Shirt",
        price: "₹ 1548",
        main: `Fp images/Shirt-1 (1).jpg`,
        sd1: "Fp images/Shirt-1 (1).jpg",
        sd2: "Fp images/Shirt-1 (2).jpg",
        sd3: "Fp images/Shirt-1 (3).jpg",
        sd4: "Fp images/Shirt-1 (4).jpg",
        des: "This is a classic and comfortable shirt for boys from GAP. It features a simple, solid beige color, making it a versatile piece for a casual wardrobe. The shirt is designed for comfort and durability for everyday wear."
    },
    {
        name: "Men Checkered Casual Green,Beige Shirt",
        price: "₹ 948",
        main: "Fp images/Shirt-2 (1).jpg",
        sd1: "Fp images/Shirt-2 (1).jpg",
        sd2: "Fp images/Shirt-2 (2).jpg",
        sd3: "Fp images/Shirt-2 (3).jpg",
        sd4: "Fp images/Shirt-2 (4).jpg",
        des: "This checkered casual shirt from THE BEAR HOUSE offers a unique color combination of green, white, and beige. It's a comfortable and stylish piece that adds a touch of personality to your look."
    },
    {
        name: "Men Solid Party Grey Shirt",
        price: "₹ 619",
        main: "Fp images/shirt-3 (1).jpg",
        sd1: "Fp images/shirt-3 (1).jpg",
        sd2: "Fp images/shirt-3 (2).jpg",
        sd3: "Fp images/shirt-3 (3).jpg",
        sd4: "Fp images/shirt-3 (4).jpg",
        des: "A sleek and elegant men's shirt from Roadster, designed for party wear. The solid grey color gives it a sophisticated and versatile look, suitable for evenings out and special occasions. "
    },
    {
        name: "Boys Solid Casual Green Shirt",
        price: "₹ 1079",
        main: "Fp images/shirt-4 (1).jpg",
        sd1: "Fp images/shirt-4 (1).jpg",
        sd2: "Fp images/shirt-4 (2).jpg",
        sd3: "Fp images/shirt-4 (3).jpg",
        sd4: "Fp images/shirt-4 (4).jpg",
        des: "This boys' shirt from GAP is a vibrant and comfortable option. It has a solid green color, making it a great staple for casual wear and daily adventures."
    },
    {
        name: "Men Regular Fit Solid Spread Collar Casual Shirt",
        price: "₹ 500",
        main: "Fp images/shirt-5 (1).jpg",
        sd1: "Fp images/shirt-5 (1).jpg",
        sd2: "Fp images/shirt-5 (2).jpg",
        sd3: "Fp images/shirt-5 (3).jpg",
        sd4: "Fp images/shirt-5 (4).jpg",
        des: "This JACK & JONES shirt is a men's casual shirt designed with a regular fit for comfortable wear. It features a classic solid color, making it a versatile staple for any wardrobe. The shirt is finished with a spread collar, adding a touch of formal style to its casual design."
    },
    {
        name: "Solid Casual Beige Shirt",
        price: "₹ 800",
        main: "Fp images/shirt-7 (1).jpg",
        sd1: "Fp images/shirt-7 (1).jpg",
        sd2: "Fp images/shirt-7 (2).jpg",
        sd3: "Fp images/shirt-7 (3).jpg",
        sd4: "Fp images/shirt-7 (4).jpg",
        des: "This casual H&M shirt is a versatile piece for a man's wardrobe. It comes in a classic solid beige color, making it easy to pair with a variety of trousers or shorts. The shirt is designed for a relaxed and comfortable fit, perfect for everyday wear."
    },
    {
        name: "Men Self Design Casual Grey Shirt",
        price: "₹ 600",
        main: "Fp images/shirt-8 (1).jpg",
        sd1: "Fp images/shirt-8 (1).jpg",
        sd2: "Fp images/shirt-8 (2).jpg",
        sd3: "Fp images/shirt-8 (3).jpg",
        sd4: "Fp images/shirt-8 (4).jpg",
        des: "A stylish and modern men's shirt from Hubberholme. It has a subtle self-design pattern that adds a touch of texture and sophistication to its casual grey color. This shirt is suitable for a variety of relaxed occasions."
    },
    {
        name: "Regular Fit Men Brown Trousers",
        price: "₹ 599",
        main: "Fp images/phant-6 (1).jpg",
        sd1: "Fp images/phant-6 (1).jpg",
        sd2: "Fp images/phant-6 (2).jpg",
        sd3: "Fp images/phant-6 (3).jpg",
        sd4: "Fp images/phant-6 (4).jpg",
        des: ""
    },
    {
        name: "Baggy jeans",
        price: "₹ 600",
        main: "Fp images/phant-9 (1).jpg",
        sd1: "Fp images/phant-9 (1).jpg",
        sd2: "Fp images/phant-9 (2).jpg",
        sd3: "Fp images/phant-9 (3).jpg",
        sd4: "Fp images/phant-9 (4).jpg",
        des: "These men's jeans are crafted from a comfortable, light grey denim with a relaxed, wide-leg fit for a modern and edgy look. They are designed to be worn low on the waist for a loose, street-style aesthetic."
    },
    {
        name: "Polo T-shirt",
        price: "₹ 500",
        main: "Fp images/shirt-10 (1).jpg",
        sd1: "Fp images/shirt-10 (1).jpg",
        sd2: "Fp images/shirt-10 (2).jpg",
        sd3: "Fp images/shirt-10 (3).jpg",
        sd4: "Fp images/shirt-10 (4).jpg",
        des: "A stylish and comfortable polo t-shirt with a contrasting beige and white colorblock design. Made from a breathable cotton blend, it features a classic polo collar and a half-zip placket, making it a versatile piece for a casual, sporty look."
    },
    {
        name: "Striped Linen Shirt",
        price: "₹ 1800",
        main: "Fp images/shirt-11 (1).jpg",
        sd1: "Fp images/shirt-11 (1).jpg",
        sd2: "Fp images/shirt-11 (2).jpg",
        sd3: "Fp images/shirt-11 (3).jpg",
        sd4: "Fp images/shirt-11 (4).jpg",
        des: "A light and airy button-down shirt made from a high-quality cotton-linen blend. Its blue and white vertical stripes and relaxed fit make it an ideal choice for a casual, vacation-ready style."
    },
    {
        name: "Striped Cotton Shirt",
        price: "₹ 499",
        main: "Fp images/shirt-12 (1).jpg",
        sd1: "Fp images/shirt-12 (1).jpg",
        sd2: "Fp images/shirt-12 (2).jpg",
        sd3: "Fp images/shirt-12 (3).jpg",
        sd4: "Fp images/shirt-12 (4).jpg",
        des: "A timeless and elegant shirt in a classic blue and white pinstripe pattern. This shirt is made from pure cotton and has a structured collar, making it suitable for both professional and smart-casual settings."
    },
    {
        name: "Baggy Jeans",
        price: "₹ 1000",
        main: "Fp images/phant-13 (1).jpg",
        sd1: "Fp images/phant-13 (1).jpg",
        sd2: "Fp images/phant-13 (2).jpg",
        sd3: "Fp images/phant-13 (3).jpg",
        sd4: "Fp images/phant-13 (4).jpg",
        des: "A pair of men's baggy jeans in a faded light blue wash. The relaxed, roomy fit through the legs provides maximum comfort, perfect for a casual, everyday look paired with sneakers."
    },
    {
        name: "White Oversized Shirt",
        price: "₹ 800",
        main: "Fp images/shirt-14 (1).jpg",
        sd1: "Fp images/shirt-14 (1).jpg",
        sd2: "Fp images/shirt-14 (2).jpg",
        sd3: "Fp images/shirt-14 (3).jpg",
        sd4: "Fp images/shirt-14 (4).jpg",
        des: "A pair of men's baggy jeans in a faded light blue wash. The relaxed, roomy fit through the legs provides maximum comfort, perfect for a casual, everyday look paired with sneakers."
    },
    {
        name: "Slim Fit Trousers",
        price: "₹ 499",
        main: "Fp images/phant-15 (1).jpg",
        sd1: "Fp images/phant-15 (1).jpg",
        sd2: "Fp images/phant-15 (2).jpg",
        sd3: "Fp images/phant-15 (3).jpg",
        sd4: "Fp images/phant-15 (4).jpg",
        des: "These grey formal trousers are tailored for a slim, modern fit. Made from a premium, wrinkle-resistant fabric, they offer a sophisticated and polished look, ideal for professional meetings or formal events."
    },
    {
        name: "Ramraj Dhoti",
        price: "₹ 700",
        main: "Fp images/vesti-16 (1).jpg",
        sd1: "Fp images/vesti-16 (1).jpg",
        sd2: "Fp images/vesti-16 (2).jpg",
        sd3: "Fp images/vesti-16 (3).jpg",
        sd4: "Fp images/vesti-16 (4).jpg",
        des: "A traditional South Indian ethnic wear set consisting of a pure white shirt and a Mundu (dhoti) with a traditional gold border. Made from lightweight and breathable cotton, this set is perfect for festive occasions, weddings, or cultural ceremonies."
    },
]
// Products array

let total = document.getElementById("total")
let f_total = document.getElementById("f-total")

// Cart Function
let cart = JSON.parse(localStorage.getItem("cart")) || []
let counter = document.querySelectorAll(".counter")
let add = document.querySelectorAll(".add-btn")
add.forEach((e) => {
    e.addEventListener("click", (() => {
        let Product = e.parentElement
        let img = Product.querySelector(".product-img img").src
        let name = Product.querySelector(".txt-head").textContent
        let price = Product.querySelector(".txt-price").textContent
        let check = cart.some((element) => {
            return element.name == name, element.price == price
        })
        if (check) {
            alert("Item already added into the cart")
        }
        else {
            cart.push({ name, price, img, total: parseInt(price.replace("₹ ", "")), input: 1 })
            console.log(cart)
            localStorage.setItem("cart", JSON.stringify(cart))
            lenshow()
        }
    }))
})

// Showing no.of products

function lenshow() {
    counter.forEach((e) => {
        e.textContent = cart.length
    })
}


// localStorage.clear()




// Showing View Page
let banner = document.querySelector(".banner-shop")
let products = document.querySelector(".products-center")
let view = document.querySelector(".product-view")

let img = document.querySelectorAll(".product-img img")
img.forEach((e) => {
    e.addEventListener("click", (() => {
        // Get product Details
        let price = e.parentElement.parentElement.querySelectorAll("p")[2].textContent
        let name = e.parentElement.parentElement.querySelector("h4").textContent

        // Finding the matching products in the array
        let product = products_arr.find((item) => {
            return item.name == name && item.price == price
        })


        // Store the product object in local storage as a Json String
        localStorage.setItem("selectedProduct", JSON.stringify(product))

        // Navigate to the view page
        window.location.href = "view.html"
    }))
})

// localStorage.clear()

window.onload = function toshow() {
    const container = document.querySelector(".cart")
    if (container) {
        show()
    }
}

// Checking...
document.addEventListener("DOMContentLoaded", (() => {
    lenshow()
    const container = document.querySelector(".cart")
    if (container) {
        show()
    }
}))

// Creating cart Page


let main_cart = document.querySelector(".cart")
function show() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || []
    main_cart.innerHTML = ""
    if (cartItems.length === 0) {
        main_cart.innerHTML = "<h3>Your cart is empty.</h3>";
        return;
    }

    //    Creating Divisions
    else {
        cartItems.forEach((ele, index) => {
            // console.log(ele)

            let main_2div = document.createElement("div")
            let remove_div = document.createElement("div")
            let img_main_div = document.createElement("div")
            let name_div = document.createElement("div")
            let price_div = document.createElement("div")
            let qty_div = document.createElement("div")
            let total_div = document.createElement("div")

            // Adding Content
            // Remove div
            let remove_btn = document.createElement("button")
            remove_btn.textContent = "Remove"
            remove_div.append(remove_btn)

            // Image div
            let img_div = document.createElement("div")
            let img = document.createElement("img")
            img.src = ele.img
            img_div.append(img)
            img_main_div.append(img_div)

            // Name div
            let name_h3 = document.createElement("h3")
            name_h3.textContent = ele.name
            name_div.append(name_h3)

            // Price div
            let price_p = document.createElement("p")
            price_p.textContent = ele.price
            price_div.append(price_p)
            calculate()
            // Quantity div
            let qty_input = document.createElement("input")
            qty_div.append(qty_input)

            // Total div
            let total_p = document.createElement("p")

            total_p.textContent = "₹ " + ele.total
            total_div.append(total_p)

            // Adding class
            main_2div.classList.add("main_2div")
            remove_div.classList.add("remove-btn-cont")
            remove_btn.classList.add("remove-btn")
            img_div.classList.add("cart-img-cont")


            // Functions
            // Remove function
            remove_btn.addEventListener("click", (() => {
                let idx = cartItems.indexOf(ele)
                console.log(idx)
                cartItems.splice(idx, 1)
                localStorage.setItem("cart", JSON.stringify(cartItems))
                main_2div.remove()
                counter.forEach((e) => {
                    e.textContent = cartItems.length
                })
                calculate()
            }))

            // Input function
            qty_input.type = "Number"
            qty_input.min = "1"
            qty_input.value = ele.input
            let num_price = parseInt(ele.price.replace("₹ ", ""))
            qty_input.addEventListener("input", (() => {
                let container = 1
                let val = parseInt(qty_input.value)
                if (!isNaN(val) && val >= 1) {
                    container = val * num_price
                    ele.input = val
                    ele.total = ele.input * num_price
                    total_p.textContent = "₹ " + ele.total
                    console.log(cartItems)
                    calculate()
                }
                else {
                    ele.input = 1
                    ele.total = num_price
                    total_p.textContent = "₹ " + ele.total
                    calculate()
                }
                localStorage.setItem("cart", JSON.stringify(cartItems))

            }))

            // localStorage.clear()


            // Appending
            main_2div.append(remove_div)
            main_2div.append(img_main_div)
            main_2div.append(name_div)
            main_2div.append(price_div)
            main_2div.append(qty_div)
            main_2div.append(total_div)
            main_cart.append(main_2div)
        })
    }


    function calculate() {
        let tl = cartItems.reduce((ele, cr) => ele + cr.total, 0)
        total.textContent = "₹ " + tl
        f_total.textContent = "₹ " + tl
    }
}


// Address
document.addEventListener("DOMContentLoaded", (() => {
    let address_container = document.getElementById("select")
    if (address_container) {
        selectFn()
        showfn()
    }
}))



function address() {
    window.location.href = "address.html"
}
let select = document.getElementById("select")
function selectFn() {
    select.addEventListener("change", ((e) => {
        if (e.target.value == 1) {
            address()
        }
    }))
}



let orders = JSON.parse(localStorage.getItem("order")) || []

let addr = JSON.parse(localStorage.getItem("addr")) || []


function showfn() {
    if (addr.length >= 1) {
        // console.log(addr)
        addr.forEach((e) => {
            let opt = document.createElement("option")
            opt.textContent = e
            select.append(opt)
            opt.selected = opt
        })
    }
}
// localStorage.clear()
console.log(addr)




// Place Order
function place() {
  
 const selectedAddress = select.value;
 if (!selectedAddress || selectedAddress === "1") {
        alert("Please select a valid shipping address before placing your order.");
        return; // Stop the function from proceeding
    }
if(cart.length==0){
    alert("Add some Items to place Order")
    return;
}

    console.log(cart)
    let today=new Date()

    cart.forEach((e, i) => {
        orders.push(
            { name: e.name, price: e.total, qty: e.input, image: e.img,method:"Cash On Delivery",Payment:"Pending",Date:today.toLocaleDateString(),Shipping:selectedAddress }
        )
    })
    cart.length = 0
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("order", JSON.stringify(orders))
    console.log(cart)
    console.log(orders)
    main_cart.remove()
    window.location.href="orders.html"
   
}

let nav=document.querySelector(".nav-content")
if(orders.length>=1){
    let myorder=document.createElement("a")
    myorder.textContent="My Orders"
    myorder.href="orders.html"
    nav.append(myorder)
}













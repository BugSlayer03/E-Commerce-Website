const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector('.cart-quantity').innerText = savedCart.length;

const container = document.getElementById("product-container");
// const buttons = document.querySelectorAll('.add-to-cart-button');
const cartQuantity = document.querySelector('.cart-quantity');
let num = cartQuantity.innerHTML;
let deliveryDate = document.querySelectorAll('.delivery-date');
let cart=JSON.parse(localStorage.getItem("cart")) || [];

// console.log(`${day}-${month}-${year}`);

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-button")) {
        // const button = e.target;

        // const addedMessage = button.parentElement.querySelector('.added-to-cart');
        // addedMessage.style.opacity = 1;

        // setTimeout(() => {
        //     addedMessage.style.opacity = 0;
        // }, 2000);

        // num++;
        // cartQuantity.innerText = num;

        const productElement=e.target.closest('.product-container');
        const name=productElement.querySelector(".product-name").innerText;
        const price=productElement.querySelector(".product-price").innerText;
        const image=productElement.querySelector(".product-image").src;
        const quantity=productElement.querySelector("select").value;

        const product={
            name,
            price,
            image,
            quantity:Number(quantity)
        };

        cart.push(product);

        localStorage.setItem("cart",JSON.stringify(cart));

        const addedMessage=productElement.querySelector(".added-to-cart");
        addedMessage.style.opacity=1;

        setTimeout(()=>{
            addedMessage.style.opacity=0;
        },2000);

        document.querySelector(".cart-quantity").innerText=cart.length;
    }
});
